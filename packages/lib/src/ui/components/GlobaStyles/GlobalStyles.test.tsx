import renderer from "react-test-renderer"
import { GlobalStyles } from "./GlobalStyles"

describe("GlobalStyles component", () => {
  it("should renders correctly", () => {
    const tree = renderer.create(<GlobalStyles />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
