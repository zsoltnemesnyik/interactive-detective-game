import { Player } from "@/types";
import { GAME_DEFAULTS } from "@/lib/constants";
import { PAGELOBBY } from "@/lib/strings";

const PlayersGrid = ({
  emptySlots,
  players,
  isHost
}: {
  emptySlots: number;
  players: Player[];
  isHost: boolean;
}) => {
  return (
    <div className="flex flex-col gap-5 px-4 py-8">
      <div className="flex justify-between gap-2">
        <span className="font-mono text-sm uppercase">
          {PAGELOBBY.teamLabel}
        </span>
        <span className="font-mono text-sm uppercase">
          ({players.length}/{GAME_DEFAULTS.max_players})
        </span>
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-5">
        {players.map((player) => (
          <div key={player.id} className="flex flex-col items-center gap-2">
            <div
              className={`relative flex h-15 w-15 items-center justify-center rounded-full text-3xl text-white ${player.role === "field" ? "bg-teal" : "bg-leather"
                }`}
            >
              {player.name.charAt(0).toUpperCase()}

              {isHost && <span className="absolute -bottom-1 -right-1 bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>}
            </div>
            <span className="text-sm font-extrabold text-ink">
              {player.name}
            </span>
          </div>
        ))}

        {Array.from({ length: emptySlots }).map((_, i) => (
          <div key={`empty-${i}`} className="flex flex-col items-center gap-2">
            <div
              className="h-15 w-15 rounded-full border-dashed border-3 border-ink/10"
            />
            <span className="text-sm font-bold text-ink/20">
              {PAGELOBBY.emptySlot}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayersGrid;
