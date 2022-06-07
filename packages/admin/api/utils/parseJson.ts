export const parseJson = async (string: string, defaultValue: unknown) => {
  try {
    const parsed = await JSON.parse(string)
    return parsed
  } catch (e) {
    // TODO trigger error in ui
    return defaultValue
  }
}
