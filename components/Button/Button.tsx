import styled from "@emotion/styled"

import Wrapper from "../../assets/vectors/potatoes/rectangle_2.svg"
import { theme } from "../../styles/theme"

export const Button = styled.button`
  font-family: ${theme.fonts.accent};
  font-weight: bold;
  font-size: ${theme.size.medium}rem;
  mask-image: url("${Wrapper.src}");
  mask-size: 100% 100%;
  mask-position: center;
  mask-repeat: no-repeat;
  background-color: ${theme.color.darkAccent};
  color: ${theme.color.lightest};
  border: none;
`
