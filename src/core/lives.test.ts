import { describe, it, expect } from "vitest"
import { calculateLives } from "./lives"

describe("calculateLives", () => {
  it("returns 0 if current lives are <= 0", () => {
    expect(calculateLives(0, true)).toBe(0)
    expect(calculateLives(0, false)).toBe(0)
  })

  it("returns current lives if answer is correct", () => {
    expect(calculateLives(5, true)).toBe(5)
    expect(calculateLives(0, true)).toBe(0)
  })

  it("returns current lives - 1 if answer is incorrect", () => {
    expect(calculateLives(5, false)).toBe(4)
  })
})

