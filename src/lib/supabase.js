import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Sem credenciais o site continua abrindo normalmente: só os trechos que
// dependem do banco avisam que a configuração está faltando.
export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase = isSupabaseConfigured
  ? createClient(url, anonKey)
  : null;

export const WAITLIST_TABLE = "waitlist_entries";
