import {
  Pages,
  PagesClient,
  Sites,
  SitesClient,
} from "@strelka-skaut/js-api-client"
import { PageWithContent } from "../schemas/page"
import { getPageWithContentFromResponse } from "./utils/getPageWithContentFromResponse"

const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT

export const getPageBySlug = async (
  siteSlug: string,
  pageSlug: string
): Promise<PageWithContent> => {
  if (!apiEndpoint) {
    throw new Error("NEXT_PUBLIC_API_ENDPOINT is not defined.")
  }

  try {
    const getSiteRequest = new Sites.GetSiteBySlugRequest()
    getSiteRequest.setSiteSlug(siteSlug)
    const siteClient = new SitesClient.ServiceClient(apiEndpoint)
    const siteResponse = await siteClient.getSiteBySlug(getSiteRequest, {})
    const site = siteResponse.getSite()
    const siteId = site?.getId()

    if (!siteId) {
      throw new Error(`There is no site with slug ${siteSlug}`)
    }

    const getPageRquest = new Pages.GetPageBySiteAndPathRequest()
    getPageRquest.setSiteId(siteId)
    getPageRquest.setPath(pageSlug)

    const client = new PagesClient.ServiceClient(apiEndpoint)
    const response = await client.getPageBySiteAndPath(getPageRquest, {})
    const page = response.getPage()
    if (!page) {
      throw new Error(`There is no page with slug ${pageSlug}.`)
    }
    return getPageWithContentFromResponse(page)
  } catch (e) {
    throw e
  }
}
