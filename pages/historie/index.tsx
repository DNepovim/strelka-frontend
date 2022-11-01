import { NextPage } from "next"
import { History as HistoryBlock } from "../../blocks/History/History"
import { headerData, historyData } from "../../mockData/mockData"
import { BaseComponentWrapper } from "../_app"

const History: NextPage = () => (
  <BaseComponentWrapper headerData={headerData}>
    <HistoryBlock {...historyData} />
  </BaseComponentWrapper>
)

export default History
