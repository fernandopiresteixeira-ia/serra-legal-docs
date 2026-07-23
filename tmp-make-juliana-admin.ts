import { createClient } from '@supabase/supabase-js';

const url = process.env.SUPABASE_URL!;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });

async function main() {
  const email = 'juliana.pletsch@russellbedford.com.br';
  const { data: list, error: listErr } = await supabase.auth.admin.listUsers({ page: 1, perPage: 1000 });
  if (listErr) {
    console.error('Erro ao listar usuários:', listErr);
    process.exit(1);
  }
  const user = list.users.find((u) => u.email?.toLowerCase() === email.toLowerCase());
  if (!user) {
    console.error('Usuário não encontrado:', email);
    process.exit(1);
  }
  console.log('Usuário encontrado:', user.id);
  const { error: insertErr } = await supabase.from('user_roles').upsert(
    { user_id: user.id, role: 'admin' },
    { onConflict: 'user_id,role' }
  );
  if (insertErr) {
    console.error('Erro ao inserir role:', insertErr);
    process.exit(1);
  }
  console.log('Juliana agora é admin.');
}

main();
