import { Database } from './supabase';

export * from './supabase';
export type { Database } from './supabase';

export type Game = Database['public']['Tables']['games']['Row'];