import { NextPage } from "next"
import { galleryData, groupHeaderData } from "../../../../../mockData/mockData"
import { GroupComponentWrapper } from "../../../../_app"
import { Gallery } from "../../../../../blocks/Gallery/Gallery"

const FallTrip: NextPage = () => (
  <GroupComponentWrapper headerData={groupHeaderData}>
    <Gallery {...galleryData} />
  </GroupComponentWrapper>
)

export default FallTrip
