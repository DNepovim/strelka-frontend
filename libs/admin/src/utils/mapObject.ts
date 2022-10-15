export function mapObject<T = unknown, K = unknown>(
  object: Record<string, T>,
  callback: (value: T, key: string, index: number) => K
): Record<string, K> {
  return Object.entries(object).reduce(
    (acc, [objectKey, objectValue], index) => ({
      [objectKey]: callback(objectValue, objectKey, index),
      ...acc,
    }),
    {}
  )
}
