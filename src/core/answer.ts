export function isCorrectAnswer(
  selected: string | null | undefined,
  correct: string | null | undefined
): boolean {
  if (!correct) throw new Error("Missing correct answer")
  if (!selected) throw new Error("No answer selected")

  return selected === correct
}