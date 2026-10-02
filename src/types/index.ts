import { Database } from "./supabase";

export * from "./supabase";
export type { Database } from "./supabase";

export type Game = Database["public"]["Tables"]["games"]["Row"];
export type Session = Database["public"]["Tables"]["sessions"]["Row"];
export type Player = Database["public"]["Tables"]["players"]["Row"];
