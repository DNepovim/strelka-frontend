import renderer from "react-test-renderer"
import { Container } from "./Container"

describe("Container component", () => {
  it("should renders correctly", () => {
    const tree = renderer
      .create(
        <Container>
          <h1>Title</h1>
        </Container>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
