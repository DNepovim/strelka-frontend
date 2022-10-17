import { BlockDef, InputDefs } from "@strelka/admin-ui"
import { BlockTemplates } from "../BlockTemplates"
import { IoPeopleCircleOutline } from "react-icons/io5"
import { PersonList, PersonProps } from "./PersonList"

export const personListBlockDef: BlockDef<PersonProps, BlockTemplates> = {
  title: "Medailonky",
  template: BlockTemplates.PersonList,
  icon: <IoPeopleCircleOutline />,
  component: PersonList,
  fields: {
    name: {
      label: "Jméno",
      input: InputDefs.Text,
    },
    secondName: {
      label: "Příjmení",
      input: InputDefs.Text,
    },
    nickname: {
      label: "Přezdívka",
      input: InputDefs.Text,
    },
  },
}
