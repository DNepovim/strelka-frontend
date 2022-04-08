export const insertToArray = (array: any[], item: any, index: number) => [
  ...array.slice(0, index + 1),
  item,
  ...array.slice(index + 1),
]
