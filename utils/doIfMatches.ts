export const doIfMatches =
  <T>(mediaQuery: string, callback: (_: T) => void, argument: T) =>
  () =>
    window.matchMedia(mediaQuery).matches && callback(argument)
