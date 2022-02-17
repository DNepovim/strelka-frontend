import { Pages, PagesClient } from "@strelka-skaut/js-api-client"
import { PageWithContent } from "../schemas/page"
import { getPageWithContentFromResponse } from "./utils/getPageWithContentFromResponse"

const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT

export const getPages = async (config?: {
  limit?: number
  offset?: number
}): Promise<PageWithContent[]> => {
  const limit = config?.limit ?? 10
  const offset = config?.offset ?? 0

  if (!apiEndpoint) {
    throw new Error("NEXT_PUBLIC_API_ENDPOINT is not defined")
  }

  try {
    const getPagesRquest = new Pages.GetPagesRequest()
    getPagesRquest.setOffset(offset)
    getPagesRquest.setLimit(limit)

    const client = new PagesClient.ServiceClient(apiEndpoint)
    const response = await client.getPages(getPagesRquest, {})
    const pages = response.getPagesList()
    return Promise.all(
      pages.map(async (page) => await getPageWithContentFromResponse(page))
    )
  } catch (e) {
    throw e
  }
}
