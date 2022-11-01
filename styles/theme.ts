export const theme = {
  layout: {
    width: 70,
    gutter: 1,
  },
  breakpoints: {
    s: 20,
    m: 30,
    l: 50,
    xl: 70,
  },
  palettes: {
    default: ["#fff7e0", "#d7c8a9", "#706244", "#483b1f"],
  },
  color: {
    lightest: "var(--lightest)",
    lightAccent: "var(--light-accent)",
    darkAccent: "var(--dark-accent)",
    darkest: "var(--darkest)",
  },
  size: {
    small: 0.85,
    base: 1.1,
  },
  fonts: {
    text: "'Open Sans', verdana, sans-serif",
    accent: "themix, verdana, sans-serif",
    headings: "skautbold, verdana, sans-serif",
  },
  timing: {
    fast: ".2s ease-in-out",
    medium: ".3s ease-in-out",
    slow: ".4s ease-in-out",
  },
  easing: {
    bounceOut: "cubic-bezier(0.37, 1.31, 0.29, 1)",
    slightBounceOut: "cubic-bezier(.33,1.23,.27,1)",
    easeInOut: "cubic-bezier(.49,0,.39,1)",
    easeInBounceOut: "cubic-bezier(.58, 0, 0.27, 1.25)",
  },
  debug: true,
}

export type Breakpoints = keyof typeof theme.breakpoints

export const min = (breakpoint: Breakpoints) =>
  `(min-width: ${theme.breakpoints[breakpoint]}rem)`
export const max = (breakpoint: Breakpoints) =>
  `(max-width: calc(${theme.breakpoints[breakpoint]}rem - 1px))`
