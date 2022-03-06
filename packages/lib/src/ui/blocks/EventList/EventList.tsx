import { Block } from "../../components/Block/Block"
import { Container } from "../../components/Container/Container"
import React from "react"
import { BlockTitle } from "../../components/BlockTitle/BlockTitle"
import { EventListProps } from "./eventListDef"
import { Event } from "../../components/Event/Event"
import styled from "@emotion/styled"

export const EventList: React.FC<EventListProps> = (props) => (
  <Block>
    <Container>
      <BlockTitle props={props} />
      <EventContainer>
        {props.events.map((event, index) => (
          <Event key={index} props={event} />
        ))}
      </EventContainer>
    </Container>
  </Block>
)

const EventContainer = styled.div``
