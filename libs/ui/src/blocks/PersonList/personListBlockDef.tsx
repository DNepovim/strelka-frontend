import { BlockDef, InputDefs } from "@strelka/admin-ui"
import { BlockTemplates } from "../BlockTemplates"
import { IoPeopleCircleOutline } from "react-icons/io5"
import { PersonList, PersonProps } from "./PersonList"

// export const personListBlockDef: BlockDef<PersonProps, BlockTemplates> = {
//   title: "Medailonky",
//   template: BlockTemplates.PersonList,
//   icon: <IoPeopleCircleOutline />,
//   component: PersonList,
//   fields: {
//     name: {
//       label: "Jméno",
//       input: InputDefs.Text,
//     },
//     surname: {
//       label: "Příjmení",
//       input: InputDefs.Text,
//     },
//     nickname: {
//       label: "Přezdívka",
//       input: InputDefs.Text,
//     },
//     image: {
//       label: "Fotka",
//       input: InputDefs.Text,
//     },
//     subtitle: {
//       label: "Funkce",
//       input: InputDefs.Text,
//     },
//     phone: {
//       label: "Telefon",
//       input: InputDefs.Text,
//     },
//     mail: {
//       label: "E-mail",
//       input: InputDefs.Text,
//     },
//   },
// }
