import renderer from "react-test-renderer"
import { MetaTags } from "./MetaTags"

describe("MetaTags component", () => {
  it("should renders correctly", () => {
    const tree = renderer
      .create(
        <MetaTags
          title={"Title"}
          description={"Description"}
          brandColor={"#000000"}
          themeColor={"#ffffff"}
          url={"https://www.some.com"}
          image="/src/image.png"
          manifest="/src/manifest.json"
          icons={{
            appleTouchIcon: "/src/appleTouchIcon.png",
            largeIcon: "/src/largeIcon.png",
            smallIcon: "/src/smallIcon.png",
            maskIcon: "/src/maskIcon.png",
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
