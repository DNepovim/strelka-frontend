import {
  blocksDefsList,
  BlocksDefs,
  BlockTemplates,
  enumToSchemaOptions,
} from "@local/lib"
import { Common } from "@strelka-skaut/js-api-client"
import * as yup from "yup"

export type PageContent = BlocksDefs[]

export interface PageWithContent {
  id: string
  name: string
  updatedUserId: string | null
  updatedAt: string | null
  content: PageContent
  siteId: string | null
  slug: string
}

export type PageId = Common.Uuid.AsObject

export const pageContentSchema = yup.array().of(
  yup.object({
    id: yup.string().required(),
    template: yup
      .mixed()
      .oneOf(enumToSchemaOptions(BlockTemplates))
      .required()
      .required(),
    fields: yup
      .object()
      .when("template", (template: BlockTemplates) =>
        template && blocksDefsList[template]
          ? blocksDefsList[template]!.schema
          : yup.mixed()
      )
      .required(),
  })
)

export const pageToCreateSchema = yup.lazy(() =>
  yup.object({
    id: yup.string(),
    name: yup.string().required(),
    content: pageContentSchema,
  })
)
