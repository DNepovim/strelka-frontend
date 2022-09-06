export const getFieldNamePath = (name: string, path?: string): string =>
  path ? `${path}[${name}]` : name
