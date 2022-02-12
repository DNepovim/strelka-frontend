import { getUrlPart } from "./getUrlPart"

describe("getUrlPart util", () => {
  it("should get url part", () => {
    const url = "https://www.origin.com/some/path?query=param#hash"

    expect(getUrlPart(url, "protocol")).toEqual("https:")
    expect(getUrlPart(url, "host")).toEqual("www.origin.com")
    expect(getUrlPart(url, "pathname")).toEqual("/some/path")
    expect(getUrlPart(url, "hash")).toEqual("#hash")
    expect(getUrlPart(url, "search")).toEqual("?query=param")
  })
})
