import * as yup from "yup"
import { Block, BlockDef } from "../blocks"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import { BlockTemplates, AdditonalFieldInputType } from "../enums"
import { NavLink, SubLink, SubLinksData } from "../../../types/Navigation"
import { imageDef, imageSchema } from "../../../types/Image"

export interface HeaderBlock extends Block {
  template: BlockTemplates.Header
  fields: HeaderProps
}

export interface HeaderProps extends BlockFields {
  links: NavLink[]
}

const subLinkSchema: yup.SchemaOf<SubLink> = yup.object({
  name: yup.string().required(),
  address: yup.string().required(),
  image: imageSchema,
  comment: yup.string(),
})

const subLinksSchema: yup.SchemaOf<SubLinksData> = yup.object({
  linkPrefix: yup.string().required(),
  data: yup.array().of(subLinkSchema),
})

const navLinksSchema: yup.SchemaOf<NavLink> = yup.object({
  name: yup.string().required(),
  address: yup.string(),
  subLinks: subLinksSchema.required(),
})

export const headerSchema: yup.SchemaOf<HeaderProps> = withBlockSchema(
  yup.object({
    links: yup.array().of(navLinksSchema),
  })
)

export const headerDef: BlockDef<HeaderProps> = {
  title: "Hlavička",
  template: BlockTemplates.Header,
  schema: headerSchema,
  additionalFields: {
    links: {
      label: "Navigace",
      clonable: true,
      fields: {
        name: {
          label: "Popis",
          inputType: AdditonalFieldInputType.Text,
        },
        address: {
          label: "Odkaz",
          inputType: AdditonalFieldInputType.Text,
        },
        subLinks: {
          label: "Podmenu",
          clonable: true,
          fields: {
            linkPrefix: {
              label: "Prefix",
              inputType: AdditonalFieldInputType.Text,
            },
            data: {
              label: "Data",
              clonable: true,
              fields: {
                name: {
                  label: "Popis",
                  inputType: AdditonalFieldInputType.Text,
                },
                address: {
                  label: "Odkaz",
                  inputType: AdditonalFieldInputType.Text,
                },
                image: imageDef,
                comment: {
                  label: "Komentář",
                  inputType: AdditonalFieldInputType.Text,
                },
              },
            },
          },
        },
      },
    },
  },
}
