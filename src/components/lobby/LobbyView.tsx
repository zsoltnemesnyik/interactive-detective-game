"use client";

import { Session, Player } from "@/types";
import { GAME_DEFAULTS } from "@/lib/constants";
import { PAGELOBBY } from "@/lib/strings";

type LobbyViewProps = {
  session: Session;
  players: Player[];
};

export default function LobbyView({ session, players }: LobbyViewProps) {
  const emptySlots = GAME_DEFAULTS.max_players - players.length;

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      {/* 1. Join code panel */}
      <div
        className="relative overflow-hidden px-6 py-10 text-center"
        style={{ background: "#35726e" }}
      >
        {/* mustard radial fény — design szerint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 120%, rgba(239,185,62,.22) 0 40%, transparent 70%)",
          }}
        />
        <p
          className="relative mb-3 text-xs tracking-[.2em] uppercase"
          style={{ color: "rgba(255,255,255,.7)" }}
        >
          {PAGELOBBY.joinCodeLabel}
        </p>
        <p
          className="relative font-mono text-5xl tracking-[.16em] text-white"
          style={{ fontFamily: "'Special Elite', monospace" }}
        >
          {session.join_code}
        </p>
        <p
          className="relative mt-2 text-sm font-bold"
          style={{ color: "rgba(255,255,255,.72)" }}
        >
          {PAGELOBBY.joinUrl}
        </p>
      </div>

      {/* 2. Player grid */}
      <div className="flex-1 px-6 py-6">
        <div className="mb-5 flex items-baseline justify-between">
          <span
            className="font-mono text-[10.5px] tracking-[.14em] uppercase"
            style={{ color: "#8a7a63" }}
          >
            {PAGELOBBY.teamLabel}
          </span>
          <span className="font-mono text-xs" style={{ color: "#35726e" }}>
            {players.length} / {GAME_DEFAULTS.max_players}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-x-4 gap-y-5">
          {players.map((player) => (
            <div key={player.id} className="flex flex-col items-center gap-2">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full text-3xl text-white"
                style={{
                  fontFamily: "'Bree Serif', serif",
                  background: player.role === "field" ? "#4f9c97" : "#8a5a34",
                }}
              >
                {player.name.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm font-extrabold text-ink">
                {player.name}
              </span>
            </div>
          ))}

          {Array.from({ length: emptySlots }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="h-20 w-20 rounded-full"
                style={{ border: "3px dashed #cfc5aa" }}
              />
              <span className="text-sm font-bold" style={{ color: "#a99e86" }}>
                {PAGELOBBY.emptySlot}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Start button */}
      <div
        className="px-5 pt-10 pb-6"
        style={{
          background: "linear-gradient(rgba(251,241,223,0), #fbf1df 32%)",
        }}
      >
        <button
          className="w-full rounded-full py-4 text-center text-lg font-extrabold"
          style={{
            background: "#e4693d",
            color: "#fff8f2",
            boxShadow: "0 5px 0 #b9502c",
          }}
        >
          {PAGELOBBY.startButton}
        </button>
      </div>
    </div>
  );
}
