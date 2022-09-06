/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Button } from "antd"
import ButtonGroup from "antd/lib/button/button-group"
import { useRef, useEffect } from "react"
import { Editor, Range, Transforms, Text } from "slate"
import { useSlate, useFocused } from "slate-react"
import { Portal } from "../Portal"
import BoldOutlined from "@ant-design/icons/lib/icons/BoldOutlined"
import ItalicOutlined from "@ant-design/icons/lib/icons/ItalicOutlined"

export enum Format {
  Bold = "bold",
  Italic = "italic",
}

export const toggleFormat = (editor: Editor, format: Format) => {
  const isActive = isFormatActive(editor, format)
  Transforms.setNodes(
    editor,
    { [format]: isActive ? null : true },
    { match: Text.isText, split: true }
  )
}

export const isFormatActive = (editor: Editor, format: Format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n[format] === true,
    mode: "all",
  })
  return !!match
}

export const HoveringToolbar = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const editor = useSlate()
  const inFocus = useFocused()

  useEffect(() => {
    const el = ref.current
    const { selection } = editor

    if (!el) {
      return
    }

    if (
      !selection ||
      !inFocus ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ""
    ) {
      el.removeAttribute("style")
      return
    }

    const domSelection = window.getSelection()
    if (!domSelection) {
      return
    }
    const domRange = domSelection.getRangeAt(0)
    const rect = domRange.getBoundingClientRect()
    el.style.opacity = "1"
    el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`
    el.style.left = `${
      rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2
    }px`
  })

  return (
    <Portal>
      <div
        ref={ref}
        css={css`
          position: absolute;
          z-index: 1;
          top: -10000px;
          left: -10000px;
          margin-top: -6px;
          opacity: 0;
          transition: opacity 0.75s;
        `}
        onMouseDown={(e) => {
          e.preventDefault()
        }}
      >
        <ButtonGroup>
          <Button
            size="small"
            icon={<BoldOutlined />}
            type={isFormatActive(editor, Format.Bold) ? "primary" : "default"}
            onClick={() => toggleFormat(editor, Format.Bold)}
          />
          <Button
            size="small"
            icon={<ItalicOutlined />}
            type={isFormatActive(editor, Format.Italic) ? "primary" : "default"}
            onClick={() => toggleFormat(editor, Format.Italic)}
          />
        </ButtonGroup>
      </div>
    </Portal>
  )
}
