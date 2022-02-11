import React from "react"
import { blocksComponentList, BlocksDefs } from "../../blocks/blocks"
import { BlockTemplates } from "../../blocks/enums"

export const RenderBlocks: React.FC<{ blocks: BlocksDefs[] }> = ({
  blocks,
}) => (
  <>
    {blocks
      .filter((block) => !!block)
      .map(({ template, fields }, i) =>
        React.createElement(blocksComponentList[template as BlockTemplates], {
          ...fields,
          key: i,
        })
      )}
  </>
)
