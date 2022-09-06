import React from "react"
import { RenderElementProps } from "slate-react"

export const RichTextEditor: React.FC<RenderElementProps> = (props) => (
  <p {...props.attributes}>{props.children}</p>
)
