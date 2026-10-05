import { Player } from "@/types";
import { GAME_DEFAULTS } from "@/lib/constants";
import { PAGELOBBY } from "@/lib/strings";

const PlayersGrid = ({
  emptySlots,
  players,
}: {
  emptySlots: number;
  players: Player[];
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
              className={`flex h-20 w-20 items-center justify-center rounded-full text-3xl text-white ${player.role === "field" ? "bg-ink" : "bg-teal"
                }`}
            >
              {player.name.charAt(0).toUpperCase()}
            </div>
            <span className="text-sm font-extrabold text-ink">
              {player.name}
            </span>
          </div>
        ))}

        {Array.from({ length: emptySlots }).map((_, i) => (
          <div key={`empty-${i}`} className="flex flex-col items-center gap-2">
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
  );
};

export default PlayersGrid;
