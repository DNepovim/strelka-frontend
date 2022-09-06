import React from "react"
import ReactDOM from "react-dom"

export const Portal: React.FC<{ children: React.ReactNode }> = ({ children }) =>
  typeof document === "object"
    ? ReactDOM.createPortal(children, document.body)
    : null
