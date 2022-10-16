import { Block, BlockFields } from "../../components/Block/Block"
import styled from "@emotion/styled"
import {
  Header3,
  SmallText,
  Text,
} from "../../components/Typography/Typography"
import React, { useState } from "react"
import { Container, Row, Column } from "../../components/Layout/Layout"
import { theme } from "../../styles/theme"
import { Button } from "../../components/Button/Button"
import { css } from "@emotion/react"

export interface EventProps {
  name: string
  date: {
    from: string
    to?: string
  }
  description?: string
}

export interface EventListProps extends BlockFields {
  content: EventProps[]
}

export const EventList: React.FC<EventListProps> = (props) => {
  const noEvent = -1
  const [expandedEventID, setExpandedEventID] = useState(noEvent)

  return (
    <Block>
      <Container>
        <Row>
          {props.content.map(({ name, date, description }, index) => (
            <Column col={10} key={index}>
              <Toggle
                onClick={() =>
                  setExpandedEventID(
                    index === expandedEventID ? noEvent : index
                  )
                }
              >
                <Name expanded={expandedEventID === index}>{name}</Name>
                <Date>
                  Termín: {date.from}
                  {date.to && <>​–​{date.to}</>}
                </Date>
              </Toggle>
              <Description expanded={expandedEventID === index}>
                {description}
              </Description>
            </Column>
          ))}
        </Row>
      </Container>
    </Block>
  )
}

const Toggle = styled.button`
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 0;
  margin: 0;
  text-align: left;
  cursor: pointer;
`

const Name = styled(Header3)`
  margin-bottom: 0;

  &:after {
    transition: transform ${theme.timing.slow};
    display: inline-block;
    margin-left: 0.2em;
    content: "▼";
    transform: rotate(
      ${(props: { expanded: boolean }) => (props.expanded ? "-180deg" : "0deg")}
    );
  }
`

const Date = styled(Text)`
  margin: 0;
`

const Description = styled(Text)`
  overflow: hidden;
  margin-top: 0;
  transition-delay: 0.2s;
  transition: line-height ${theme.timing.slow}, opacity 0.2s 0.15s ease-in-out;
  ${(props: { expanded: boolean }) =>
    props.expanded
      ? css`
          line-height: 1.6em;
          opacity: 1;
        `
      : css`
          line-height: 0rem;
          opacity: 0;
          transition: line-height 0.3s ease-in-out, opacity 0.15s ease-in-out;
        `}
  margin-bottom: 1em;
`
