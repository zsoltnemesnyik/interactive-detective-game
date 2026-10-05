import { Player } from "@/types"

const PlayersListWithRoles = ({ players }: { players: Player[] }) => {
  return (
    <>
      {players.length != 0 ? (
        <div className="space-y-2">
          {players.map((player) => (
            <PlayersListCard key={player.id} player={player} />
          ))}
        </div>
      ) : <span>Még nincsenek játékosok</span>}
    </>
  )
}

export default PlayersListWithRoles

export const PlayersListCard = ({ player }: { player: Player }) => {
  return (
    <div
      className="flex items-center gap-3 bg-paper border border-sage rounded-xl px-4 py-3"
    >
      <div
        className="w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
      >
        {player.name[0]?.toUpperCase()}
      </div>
      <span className="font-bold text-sm text-ink flex-1">
        {player.name}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
        {player.role === "field" ? "TEREPEN" : "TERMINÁL"}
      </span>
    </div>
  )
} 