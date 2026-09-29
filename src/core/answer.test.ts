import { describe, it, expect } from "vitest"
import { isCorrectAnswer } from "./answer"

describe("isCorrectAnswer", () => {
  it("throws if correct answer is missing", () => {
    expect(() => isCorrectAnswer("A", null)).toThrow("Missing correct answer")
  })

  it("throws if no answer is selected", () => {
    expect(() => isCorrectAnswer(null, "A")).toThrow("No answer selected")
  })

  it("returns true if correct answer is selected", () => {
    expect(isCorrectAnswer("A", "A")).toBe(true)
  })

  it("returns false if incorrect answer is selected", () => {
    expect(isCorrectAnswer("A", "B")).toBe(false)
  })
})