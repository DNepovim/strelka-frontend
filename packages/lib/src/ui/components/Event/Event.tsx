import { Paragraph } from "../Paragraph/Paragraph"
import React from "react"
import { EventProps } from "../../../types/Event"
import styled from "@emotion/styled"
import { Header3 } from "../Typography/Typography"
import { min, theme } from "../../styles/theme"

function getLocalDate(date: string, options: Intl.DateTimeFormatOptions) {
  return new Date(date).toLocaleDateString("cs-CZ", options)
}

export const Event: React.FC<{ props: EventProps }> = ({
  props: { name, date, description },
}) => (
  <EventWrapper>
    <DateHighlight>
      <Day>
        {getLocalDate(date.from, {
          day: "numeric",
          month: "numeric",
        })}
      </Day>
    </DateHighlight>
    <Information>
      <Name>{name}</Name>
      {description && (
        <Description>
          {description.map(({ image, textNodes }, index) => (
            <Paragraph image={image} textNodes={textNodes} key={index} />
          ))}
        </Description>
      )}
    </Information>
  </EventWrapper>
)

const DateHighlight = styled.div``

const Day = styled(Header3.withComponent("div"))`
  text-align: right;
  font-size: 1.5rem;
  line-height: 1em;
  display: flex;
  justify-content: right;
  height: 2.15rem;
  align-items: flex-end;

  @media ${min("m")} {
    font-size: 1.75rem;
  }
`

const Information = styled.div``

const EventWrapper = styled.div`
  margin-bottom: ${theme.size.base * 0.5}rem;

  display: grid;
  gap: 1rem;
  grid-template-columns: 6ch 1fr;

  @media ${min("m")} {
    grid-template-columns: 8ch 1fr;
  }
`

const Name = styled(Header3)`
  margin: 0;
  margin-bottom: ${theme.size.base * 0.5}rem;
`

const Description = styled.div``
