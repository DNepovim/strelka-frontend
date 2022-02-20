import { Pages, PagesClient } from "@strelka-skaut/js-api-client"
import { PageWithContent } from "../schemas/page"
import { getPageWithContentFromResponse } from "./utils/getPageWithContentFromResponse"

const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT

export const getPageBySlug = async (slug: string): Promise<PageWithContent> => {
  if (!apiEndpoint) {
    throw new Error("NEXT_PUBLIC_API_ENDPOINT is not defined.")
  }

  try {
    const getPageRquest = new Pages.GetPageBySlugRequest()
    getPageRquest.setPageSlug(slug)

    const client = new PagesClient.ServiceClient(apiEndpoint)
    const response = await client.getPageBySlug(getPageRquest, {})
    const page = response.getPage()
    if (!page) {
      throw new Error(`There is no page with slug ${slug}.`)
    }
    return getPageWithContentFromResponse(page)
  } catch (e) {
    throw e
  }
}
