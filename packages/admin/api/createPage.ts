import { Pages, PagesClient } from "@strelka-skaut/js-api-client"
import { PageWithContent } from "../schemas/page"

const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT

export const createPage = async (values: PageWithContent) => {
  if (!apiEndpoint) {
    throw new Error("NEXT_PUBLIC_API_ENDPOINT is not defined")
  }
  try {
    const createPageRquest = new Pages.CreatePageRequest()
    createPageRquest.setName(values.name)
    createPageRquest.setSlug(values.slug)
    createPageRquest.setContent(JSON.stringify(values.content))
    const client = new PagesClient.ServiceClient(apiEndpoint)
    const response = await client.createPage(createPageRquest, {})
    return { id: response.getId() }
  } catch (e) {
    throw e
  }
}
