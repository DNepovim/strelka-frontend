import { Block } from "../../components/Block/Block"
import { Container, Row } from "../../components/Layout/Layout"
import styled from "@emotion/styled"

export interface VerticalSpaceProps {
  height: number
}

export const VerticalSpace: React.FC<VerticalSpaceProps> = ({ height }) => (
  <EmptyBlock>
    <Container>
      <EmptyRow height={height} />
    </Container>
  </EmptyBlock>
)

const EmptyBlock = styled(Block)`
  margin-bottom: 0;
`

export const EmptyRow = styled(Row)`
  height: ${(props: VerticalSpaceProps) => props.height}rem;
  margin: 0;
`
