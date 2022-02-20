export const theme = {
  layout: {
    width: 62.5,
  },
  breakpoints: {
    s: 31.25,
    m: 46.75,
    l: 62.5,
  },
  palettes: {
    default: ["#fff7e0", "#d7c8a9", "#544827", "#483b1f"],
  },
  color: {
    lightest: "var(--lightest)",
    lightAccent: "var(--light-accent)",
    darkAccent: "var(--dark-accent)",
    darkest: "var(--darkest)",
  },
  size: {
    small: 1,
    base: 1.2,
  },
  fonts: {
    text: "'Open Sans', verdana, sans-serif",
    accent: "themix, verdana, sans-serif",
    headings: "skautbold, verdana, sans-serif",
  },
  timing: {
    fast: ".2s ease-in-out",
    slow: ".35s ease-in-out",
  },
}

export const min = (breakpoint: "s" | "m" | "l") =>
  `(min-width: ${theme.breakpoints[breakpoint]}rem)`
export const max = (breakpoint: "s" | "m" | "l") =>
  `(max-width: ${theme.breakpoints[breakpoint]}rem)`
