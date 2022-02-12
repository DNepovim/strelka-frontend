import { isLinkExternal } from "./isLinkExternal"

describe("isLinkExternal util", () => {
  it("should return true if is link external", () => {
    const url = "https://www.origin.com/some/path?query=param#hash"
    expect(isLinkExternal(url)).toBeTruthy()
  })

  it("should return false if link is not external", () => {
    const url = "#hash"
    expect(isLinkExternal(url)).toBeFalsy()
  })
})
