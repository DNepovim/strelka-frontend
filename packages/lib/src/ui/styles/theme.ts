export const theme = {
  layout: {
    width: 1000,
  },
  breakpoints: {
    s: 500,
    m: 700,
    l: 1000,
  },
  color: {
    brand: "#ccc15a",
    second: "#aac15a",
    background: "#ffffff",
  },
  fonts: {
    text: "themix, verdana, sans-serif",
    headings: "skautbold, verdana, sans-serif",
  },
}

export const min = (breakpoint: "s" | "m" | "l") =>
  `(min-width: ${theme.breakpoints[breakpoint]}px)`
export const max = (breakpoint: "s" | "m" | "l") =>
  `(min-width: ${theme.breakpoints[breakpoint] - 1}px)`
