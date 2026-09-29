export const MAX_LIVES = 5

export function calculateLives(
  currentLives: number,
  isAnswerCorrect: boolean
): number {

  if (currentLives <= 0) return 0
  if (isAnswerCorrect) return currentLives

  return currentLives - 1
}