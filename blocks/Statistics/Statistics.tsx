import { Block } from "../../components/Block/Block"
import { Column, Container, Row } from "../../components/Layout/Layout"
import Image from "next/image"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import styled from "@emotion/styled"
import { icons, Icons } from "../ImageText/ImageText"
import React from "react"
import { Header2, Header3, Text } from "../../components/Typography/Typography"
import { theme } from "../../styles/theme"

export interface Statistic {
  icon: Icons
  value: number
  description: string
}

export interface StatisticsProps {
  title: string
  content: Statistic[]
}

export const Statistics: React.FC<StatisticsProps> = ({ title, content }) => (
  <Block>
    <Container>
      <Row>
        <Column col={12}>
          <Header2>{title}</Header2>
        </Column>
      </Row>
      <StatisticsRow>
        {content.map(({ icon, value, description }, index) => (
          <StatisticColumn col={8} m={5} xl={2} key={index}>
            <CountWrapper>
              <CountUp
                separator={" " /* nbs */}
                useEasing
                end={value}
                delay={0.5}
                duration={2.5}
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <Count ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <IconWrapper>
                <Image src={icons[icon]} />
              </IconWrapper>
            </CountWrapper>
            <Description>{description}</Description>
          </StatisticColumn>
        ))}
      </StatisticsRow>
    </Container>
  </Block>
)

const StatisticsRow = styled(Row)`
  justify-content: center;
`

const StatisticColumn = styled(Column)`
  margin-bottom: ${theme.layout.gutter * 2}rem;
`

const CountWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.layout.gutter}rem;
  margin-bottom: ${theme.layout.gutter * 0.5}rem;
`

const Count = styled(Header3.withComponent("span"))`
  align-self: center;
  margin: 0;
  font-size: 2rem;
`

const IconWrapper = styled.div`
  position: relative;
  width: 2rem;
  height: auto;
  display: flex;
  align-self: stretch;
`
const Description = styled(Header3.withComponent(Text))`
  text-align: center;
  font-weight: normal;
`
