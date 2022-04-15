export const insertToArray = (
  array: unknown[],
  item: unknown,
  index: number
) => [...array.slice(0, index + 1), item, ...array.slice(index + 1)]
