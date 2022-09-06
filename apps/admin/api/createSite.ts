import { Sites, SitesClient } from "@strelka-skaut/js-api-client"
import { Site } from "../schemas/site"

const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT

export const createSite = async (values: Site): Promise<string> => {
  if (!apiEndpoint) {
    throw new Error("NEXT_PUBLIC_API_ENDPOINT is not defined")
  }
  try {
    const createSiteRquest = new Sites.CreateSiteRequest()
    createSiteRquest.setName(values.name)
    createSiteRquest.setSlug(values.slug)
    const client = new SitesClient.ServiceClient(apiEndpoint)
    await client.createSite(createSiteRquest, {})
    return values.slug
  } catch (e) {
    throw e
  }
}
