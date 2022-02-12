export const theme = {
  layout: {
    width: 1000,
  },
  breakpoints: {
    s: 500,
    m: 700,
    l: 1000,
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
    small: "var(--small-size)",
    base: "var(--base-size)",
  },
  fonts: {
    text: "'Open Sans', verdana, sans-serif",
    accent: "themix, verdana, sans-serif",
    headings: "skautbold, verdana, sans-serif",
  },
  timing: {
    fast: "0.2s ease-in-out",
    slow: "0.35s ease-in-out",
  },
  navSize: {
    horizontal: {
      height: "5rem",
      linkSize: "1.5rem",
      subLinkSize: "1.4rem",
      linkPadding: "0.55em",
      padding: "0.3em",
      subLinkPadding: "0.4em",
      subLinkHPadding: "0.5em",
      subLinkImageSize: "4rem",
      subLinksMaxWidth: "300px",
      linkSidePadding: "2rem",
    },
    vertical: {
      height: "4rem",
      linkHeight: "3rem",
      buttonSize: "1.5rem",
    },
  },
}
export const min = (breakpoint: "s" | "m" | "l") =>
  `(min-width: ${theme.breakpoints[breakpoint]}px)`
export const max = (breakpoint: "s" | "m" | "l") =>
  `(max-width: ${theme.breakpoints[breakpoint] - 1}px)`
