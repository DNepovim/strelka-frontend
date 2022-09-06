import { Pages, PagesClient } from "@strelka-skaut/js-api-client"
import { PageFormValues } from "../schemas/page"

const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT

export const createPage = async (values: PageFormValues): Promise<string> => {
  if (!apiEndpoint) {
    throw new Error("NEXT_PUBLIC_API_ENDPOINT is not defined")
  }
  try {
    const createPageRquest = new Pages.CreatePageRequest()
    createPageRquest.setName(values.name)
    createPageRquest.setSlug(values.slug)
    createPageRquest.setContent(JSON.stringify(values.content))
    const client = new PagesClient.ServiceClient(apiEndpoint)
    await client.createPage(createPageRquest, {})
    return values.slug
  } catch (e) {
    throw e
  }
}
