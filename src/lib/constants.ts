import { MAX_LIVES } from "@/core/lives"

export const ROUTES = {
  home: "/",
  games: "/games",
  game: "/game",
  login: "/login",
} as const;

export const GAME_DEFAULTS = {
  max_players: 6,
  max_lives: MAX_LIVES,
}

export const DIFFICULTY_LABELS: Record<string, string> = {
  easy: "Könnyű",
  medium: "Közepes",
  hard: "Nehéz",
};