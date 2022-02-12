import { blocksDefList, BlockTemplates, enumToSchemaOptions } from "@local/lib"
import * as yup from "yup"

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
