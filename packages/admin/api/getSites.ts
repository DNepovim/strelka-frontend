import { Sites, SitesClient } from "@strelka-skaut/js-api-client"
import { Site } from "../schemas/site"

const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT

export const getSites = async (config?: {
  limit?: number
  offset?: number
}): Promise<Site[]> => {
  const limit = config?.limit ?? 10
  const offset = config?.offset ?? 0

  if (!apiEndpoint) {
    throw new Error("NEXT_PUBLIC_API_ENDPOINT is not defined")
  }

  try {
    const getSitesRquest = new Sites.GetSitesRequest()
    getSitesRquest.setOffset(offset)
    getSitesRquest.setLimit(limit)

    const client = new SitesClient.ServiceClient(apiEndpoint)
    const response = await client.getSites(getSitesRquest, {})
    const sites = response.getSitesList()
    return sites.map((site) => ({
      id: site.getId()?.toString(),
      name: site.getName(),
      slug: site.getSlug(),
    }))
  } catch (e) {
    throw e
  }
}
