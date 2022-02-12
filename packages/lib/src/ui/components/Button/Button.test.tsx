import renderer from "react-test-renderer"
import { Button } from "./Button"

describe("Button component", () => {
  it("should renders correctly", () => {
    const tree = renderer
      .create(<Button link="http://www.somewhere.com">Link somewhere</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should renders correctly with target blank", () => {
    const tree = renderer
      .create(
        <Button link="http://www.somewhere.com" targetBlank>
          Link somewhere
        </Button>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should renders correctly small button", () => {
    const tree = renderer
      .create(
        <Button link="http://www.somewhere.com" isSmall>
          Link somewhere
        </Button>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
