
CREATE TABLE public.rd_station_sync_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
  status TEXT NOT NULL,
  http_status INTEGER,
  response_body TEXT,
  error_message TEXT,
  attempt INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX rd_station_sync_logs_lead_id_idx ON public.rd_station_sync_logs(lead_id, created_at DESC);

GRANT SELECT ON public.rd_station_sync_logs TO authenticated;
GRANT ALL ON public.rd_station_sync_logs TO service_role;

ALTER TABLE public.rd_station_sync_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view rd sync logs"
  ON public.rd_station_sync_logs FOR SELECT
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));
