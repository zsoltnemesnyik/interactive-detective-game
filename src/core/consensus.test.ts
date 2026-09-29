import { describe, it, expect } from "vitest"
import { hasConsensus } from "./consensus"

describe("hasConsensus", () => {
  it("returns false if there are not enough votes", () => {
    expect(hasConsensus(["A"])).toBe(false)
    expect(hasConsensus([])).toBe(false)
  })

  it("returns false if there is no consensus", () => {
    expect(hasConsensus(["A", "B", "C"])).toBe(false)
    expect(hasConsensus(["A", "B"])).toBe(false)
  })

  it("returns true if there is consensus", () => {
    expect(hasConsensus(["A", "A", "A"])).toBe(true)
  })
})

