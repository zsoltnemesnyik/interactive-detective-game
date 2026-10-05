import { useState, useEffect } from "react"
import { Player } from "@/types"

export function useIsHost(players: Player[], joinCode: string) {
  const [currentPlayerId, setCurrentPlayerId] = useState<string | null>(null)

  useEffect(() => {
    const playerId = localStorage.getItem(`player_id_${joinCode}`)
    console.log({ playerId, firstPlayer: players[0]?.id })
    if (playerId) setCurrentPlayerId(playerId)
  }, [joinCode, players])

  return players[0]?.id === currentPlayerId
}