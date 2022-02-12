import {
  blocksDefList,
  BlocksDefs,
  BlockTemplates,
  enumToSchemaOptions,
} from "@local/lib"
import { Pages } from "@strelka-skaut/js-api-client"
import * as yup from "yup"

export interface PageWithContent extends Omit<Pages.Page.AsObject, "content"> {
  content: BlocksDefs[]
}

export const pageToCreateSchema = yup.lazy(() =>
  yup.array().of(
    yup.object().shape({
      template: yup
        .string()
        .oneOf(enumToSchemaOptions(BlockTemplates))
        .required(),
      fields: yup
        .mixed()
        .when("template", (template: BlockTemplates) =>
          template ? blocksDefList[template].schema : yup.mixed()
        ),
    })
  )
)
