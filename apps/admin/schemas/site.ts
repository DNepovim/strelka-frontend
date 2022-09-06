import * as yup from "yup"

export interface Site {
  id?: string
  name: string
  slug: string
}

export const siteToCreateSchema: yup.SchemaOf<Site> = yup.object({
  id: yup.string(),
  name: yup.string().required(),
  slug: yup.string().required(),
})
