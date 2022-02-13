import {
  blocksDefsList,
  BlocksDefs,
  BlockTemplates,
  enumToSchemaOptions,
} from "@local/lib"
import { Pages } from "@strelka-skaut/js-api-client"
import * as yup from "yup"

export type PageContent = BlocksDefs[]

export interface PageWithContent extends Omit<Pages.Page.AsObject, "content"> {
  content: PageContent
}

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
