import { NextPage } from "next"
import { GroupComponentWrapper } from "../../../_app"
import { galleryListData, groupHeaderData } from "../../../../mockData/mockData"
import { GalleryList } from "../../../../blocks/GalleryList/GalleryList"

const Photogallery: NextPage = () => (
  <GroupComponentWrapper headerData={groupHeaderData}>
    <GalleryList {...galleryListData}></GalleryList>
  </GroupComponentWrapper>
)

export default Photogallery
