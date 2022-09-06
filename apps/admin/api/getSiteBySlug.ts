import { Sites, SitesClient } from "@strelka-skaut/js-api-client"
import { Site } from "../schemas/site"

const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT

export const getSiteBySlug = async (slug: string): Promise<Site> => {
  if (!apiEndpoint) {
    throw new Error("NEXT_PUBLIC_API_ENDPOINT is not defined.")
  }

  try {
    const getSiteRquest = new Sites.GetSiteBySlugRequest()
    getSiteRquest.setSiteSlug(slug)

    const client = new SitesClient.ServiceClient(apiEndpoint)
    const response = await client.getSiteBySlug(getSiteRquest, {})
    const site = response.getSite()
    if (!site) {
      throw new Error(`There is no page with slug ${slug}.`)
    }
    return {
      id: site.getId()?.toString(),
      name: site.getName(),
      slug: site.getSlug(),
    }
  } catch (e) {
    throw e
  }
}
