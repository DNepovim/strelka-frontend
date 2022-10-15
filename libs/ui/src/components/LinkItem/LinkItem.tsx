import styled from "@emotion/styled"
import { max, min } from "../../styles/theme"

export const LinkItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: stretch;
  box-sizing: border-box;

  @media ${max("l")} {
    flex-direction: column;
  }

  @media ${min("l")} {
    &:hover {
      button {
        &:after {
          transform: rotate(-180deg);
        }
      }
      ul {
        opacity: 1;
        pointer-events: all;
      }
    }
  }
`
