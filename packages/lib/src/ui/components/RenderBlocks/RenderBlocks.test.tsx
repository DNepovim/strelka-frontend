import renderer from "react-test-renderer"
import { BlockTemplates, RenderBlocks } from "../../.."

describe("RenderBlocks component", () => {
  it("should renders correctly", () => {
    const tree = renderer
      .create(
        <RenderBlocks
          blocks={[
            {
              id: "id-1",
              template: BlockTemplates.Example,
              fields: {
                title: "Title",
                button: {
                  label: "Label",
                  link: "url",
                },
              },
            },
            {
              id: "id-2",
              template: BlockTemplates.Example,
              fields: {
                title: "Title 2",
                button: {
                  label: "Label",
                  link: "url",
                },
              },
            },
          ]}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
