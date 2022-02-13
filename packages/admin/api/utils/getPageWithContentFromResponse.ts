import { Pages } from "@strelka-skaut/js-api-client"
import { PageWithContent } from "../../schemas/page"
import { gptbTimestampToString } from "./gptbTimestampTostring"

export const getPageWithContentFromResponse = (
  page: Pages.Page
): PageWithContent => {
  const pageId = page.getId()?.getValue()
  if (!pageId) {
    throw new Error("Missing page id on response.")
  }
  return {
    id: pageId,
    name: page.getName(),
    siteId: page.getSiteId()?.getValue() ?? null,
    updatedUserId: page.getUpdatedUserId()?.getValue() ?? null,
    updatedAt: page.hasUpdatedAt()
      ? gptbTimestampToString(page.getUpdatedAt()!, "d. m. yyyy")
      : null,
    content: JSON.parse(page.getContent()),
    slug: page.getSlug(),
  }
}
