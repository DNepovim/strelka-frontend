// @ts-ignore
import { replaceDiacritics } from "webalize"

export const webalize = (str: string): string =>
  replaceDiacritics(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^[-\s]+/g, "")
    .replace(/--+/g, "-")
