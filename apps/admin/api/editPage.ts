import { Common, Pages, PagesClient } from "@strelka-skaut/js-api-client"
import { PageFormValues } from "../schemas/page"

const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT

export const editPage = async (values: PageFormValues): Promise<string> => {
  if (!apiEndpoint) {
    throw new Error("NEXT_PUBLIC_API_ENDPOINT is not defined")
  }
  if (!values.id) {
    throw new Error("Page id is not defined.")
  }
  try {
    const editPageRquest = new Pages.UpdatePageRequest()
    const pageUuid = new Common.Uuid()
    pageUuid.setValue(values.id)
    editPageRquest.setPageId(pageUuid)
    editPageRquest.setName(values.name)
    editPageRquest.setSlug(values.slug)
    editPageRquest.setContent(JSON.stringify(values.content))
    const client = new PagesClient.ServiceClient(apiEndpoint)
    await client.updatePage(editPageRquest, {})
    return values.slug
  } catch (e) {
    throw e
  }
}
