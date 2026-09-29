import { Database } from "@/types";
import { MAX_LIVES } from "@/core/lives"

export const ROUTES = {
  home: "/",
  games: "/games",
  game: "/game",
  auth: "/login",
  admin: {
    home: "/admin",
    dashboard: "/admin/dashboard",
    games: "/admin/games",
    game: "/admin/games/[id]",
    newGame: "/admin/games/new",
  }
} as const;

export const GAME_DEFAULTS = {
  max_players: 6,
  max_lives: MAX_LIVES,
}

export const DIFFICULTY_LABELS: Record<Database["public"]["Enums"]["difficulty"], string> = {
  easy: "Könnyű",
  medium: "Közepes",
  hard: "Nehéz",
};