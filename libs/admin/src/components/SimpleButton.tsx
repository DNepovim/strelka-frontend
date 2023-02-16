import React from "react"

export const SimpleButton: React.FC<React.HTMLProps<HTMLButtonElement>> = (
  props
) => <button {...props} type="button" />
