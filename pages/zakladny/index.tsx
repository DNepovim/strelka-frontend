import { NextPage } from "next"
import { ImageText } from "../../blocks/ImageText/ImageText"
import {
  buildingData,
  buildingIntroData,
  headerData,
} from "../../mockData/mockData"
import { BaseComponentWrapper } from "../_app"

const Bases: NextPage = () => (
  <BaseComponentWrapper headerData={headerData}>
    <ImageText {...buildingIntroData} />
    <ImageText {...buildingData} />
  </BaseComponentWrapper>
)

export default Bases
