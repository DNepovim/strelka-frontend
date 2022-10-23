import { ReactElement } from "react"
import { FieldProps, InputDefs } from "./components"
import { Unarray } from "./utils/utilityTypes"

export interface Block<T, F extends {}> {
  id: string
  template: T
  fields: F
}

export interface BlockDef<T, BlockTemplates> {
  template: BlockTemplates
  title: string
  icon: ReactElement
  fields: AdminFields<T>
  component: React.FC<T>
}

export type AdminFields<T> = {
  [K in keyof T]: AdminField<Unarray<T[K]>>
}

type AdminField<T> = GroupDef<T> | FieldDef<T>

interface GeneralDef {
  label: string
  clonable?: true
}

export interface AdminFieldProps<T> {
  label?: string
  name: string
  children: React.FC<FieldProps>
}

interface FieldDef<T> extends GeneralDef {
  input: InputDefs
}

interface GroupDef<T> extends GeneralDef {
  fields: AdminFields<T>
}

export const isGroupField = <T extends {}>(
  component: AdminField<T>
): component is GroupDef<T> => "fields" in component
