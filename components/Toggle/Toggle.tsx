import styled from "@emotion/styled"
import { theme } from "../../styles/theme"

export const Toggle = styled.button`
  border: none;
  width: 100%;
  background: none;

  &:after {
    content: "▼";
    color: ${theme.color.darkest};
    font-family: ${theme.fonts.headings};
    font-size: 0.65em;
    padding-left: 0.2em;
    padding-right: 0.2em;
    transform-origin: center center;
    transition: transform ${theme.timing.medium};
    ${(props: { isActive: boolean }) =>
      props.isActive && "transform: rotate(-180deg);"}
  }
`
