import {
  blocksDefsList,
  BlocksDefs,
  BlockTemplates,
  enumToSchemaOptions,
} from "@local/lib"
import { Common } from "@strelka-skaut/js-api-client"
import { Optional } from "utility-types"
import * as yup from "yup"

export type PageContent = BlocksDefs[]

export enum PageRole {
  Page = "page",
  FrontPage = "frontPage",
  EventDetail = "eventDetail",
}

export interface PageWithContent {
  id: string
  name: string
  updatedUserId: string | null
  updatedAt: string | null
  content?: PageContent
  siteId?: string | null
  slug: string
  parentPageId: string
  role: PageRole
}

export type PageFormValues = Optional<
  Omit<PageWithContent, "updatedAt" | "updatedUserId">,
  "id"
>

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
      .when(
        "template",
        (template: BlockTemplates) =>
          blocksDefsList?.[template]?.schema ?? yup.mixed()
      )
      .required(),
  })
)

export const pageToCreateSchema = yup.lazy(() =>
  yup.object({
    id: yup.string(),
    slug: yup.string().required(),
    name: yup.string().required(),
    siteId: yup.string(),
    // content: pageContentSchema,
  })
)
