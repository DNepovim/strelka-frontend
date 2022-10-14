import { tp } from "./tp"

describe("tp util", () => {
  it("should return fixed string", () => {
    expect(tp("A tak sel dal... 9. - 8.  2016 .")).toBe(
      "A tak sel dal… 9.–8. 2016."
    )
  })
})
