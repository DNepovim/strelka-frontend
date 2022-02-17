export const parseJson = async (string: string, defaultValue: any) => {
  try {
    const parsed = await JSON.parse(string)
    return parsed
  } catch (e) {
    // TODO trigger error in ui
    return defaultValue
  }
}
