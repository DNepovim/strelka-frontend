/* eslint-disable @typescript-eslint/no-explicit-any */
export const enumToSchemaOptions = <T extends any>(
  enumObject: Record<string, any>
): Array<T> =>
  Object.keys(enumObject)
    .filter((key) => isNaN(Number(key)))
    .map((key) => enumObject[key])
