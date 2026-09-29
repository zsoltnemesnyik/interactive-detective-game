export function hasConsensus(
  votes: string[]
): boolean {
  if (votes.length < 2) return false;

  return votes.every((vote) => vote === votes[0])
}