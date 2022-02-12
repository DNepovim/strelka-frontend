import renderer from "react-test-renderer"
import { Block } from "./Block"

describe("Block component", () => {
  it("should renders correctly", () => {
    const tree = renderer
      .create(
        <Block>
          <h1>Title</h1>
        </Block>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should renders correctly with id and background", () => {
    const tree = renderer
      .create(
        <Block id="main" backgroundColor="#ffffff">
          <h1>Title</h1>
        </Block>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
