import { createClient } from "@supabase/supabase-js";

// A chave publicável é feita para viver no navegador: ela aparece no bundle do
// site de qualquer forma. Quem protege os dados é o RLS da tabela, que só
// permite inserir e atualizar o próprio registro, nunca ler a lista.
// As variáveis de ambiente têm precedência, então dá para trocar o projeto
// pela Vercel sem mexer no código.
const PROJETO_PADRAO = "https://eegpxvrwcundniglfawm.supabase.co";
const CHAVE_PADRAO = "sb_publishable_sPVbywysJD5ohIo0QV8rTg_WZWvsdAr";

const url = import.meta.env.VITE_SUPABASE_URL || PROJETO_PADRAO;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || CHAVE_PADRAO;

export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase = isSupabaseConfigured ? createClient(url, anonKey) : null;

export const WAITLIST_TABLE = "waitlist_entries";
