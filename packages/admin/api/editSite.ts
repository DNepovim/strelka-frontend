import { Common, Sites, SitesClient } from "@strelka-skaut/js-api-client"
import { Site } from "../schemas/site"

const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT

export const editSite = async (values: Site): Promise<string> => {
  if (!apiEndpoint) {
    throw new Error("NEXT_PUBLIC_API_ENDPOINT is not defined")
  }
  if (!values.id) {
    throw new Error("Site id is not defined.")
  }
  try {
    const editSiteRquest = new Sites.UpdateSiteRequest()
    const siteUuid = new Common.Uuid()
    siteUuid.setValue(values.id)
    editSiteRquest.setSiteId(siteUuid)
    editSiteRquest.setName(values.name)
    editSiteRquest.setSlug(values.slug)
    const client = new SitesClient.ServiceClient(apiEndpoint)
    await client.updateSite(editSiteRquest, {})
    return values.slug
  } catch (e) {
    throw e
  }
}
