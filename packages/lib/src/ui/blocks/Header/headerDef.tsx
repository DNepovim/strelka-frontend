import * as yup from "yup"
import { Block, BlockDef } from "../blocks"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import { BlockTemplates, InputType } from "../enums"
import { NavLink, SubLink, SubLinksData } from "../../../types/navigation"

export interface HeaderBlock extends Block {
  template: BlockTemplates.Header
  fields: HeaderProps
}

export interface HeaderProps extends BlockFields {
  content: NavLink[]
}

const subLinkSchema: yup.SchemaOf<SubLink> = yup.object({
  name: yup.string().required(),
  address: yup.string().required(),
  image: yup.object({ src: yup.string().required() }).required(),
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
    content: yup.array().of(navLinksSchema),
  })
)

export const headerDef: BlockDef<HeaderProps> = {
  title: "Hlavička",
  template: BlockTemplates.Header,
  schema: headerSchema,
  adminFields: {
    content: {
      label: "Navigace",
      clonable: true,
      fields: {
        name: {
          label: "Popis",
          inputType: InputType.Text,
        },
        address: {
          label: "Odkaz",
          inputType: InputType.Text,
        },
        subLinks: {
          label: "Podmenu",
          clonable: true,
          fields: {
            linkPrefix: {
              label: "Prefix",
              inputType: InputType.Text,
            },
            data: {
              label: "Data",
              clonable: true,
              fields: {
                name: {
                  label: "Popis",
                  inputType: InputType.Text,
                },
                address: {
                  label: "Odkaz",
                  inputType: InputType.Text,
                },
                image: {
                  label: "Obrázek",
                  fields: {
                    src: {
                      label: "Odkaz",
                      inputType: InputType.Text,
                    },
                  },
                },
                comment: {
                  label: "Komentář",
                  inputType: InputType.Text,
                },
              },
            },
          },
        },
      },
    },
  },
}
