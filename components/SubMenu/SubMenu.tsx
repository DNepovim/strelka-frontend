import React from "react"
import styled from "@emotion/styled"
import { min, theme } from "../../styles/theme"
import SquareMask from "../../assets/vectors/potatoes/rectangle_5.svg"
import { SubMenuProps } from "../../types/Navigation"
import { ImageWithMask } from "../ImageWithMask/ImageWithMask"
import { randomCircle } from "../../utils/Masks"
import { Header3, SmallText } from "../Typography/Typography"
import { Link } from "../Link/Link"
import { css } from "@emotion/react"

export interface StatefulSubMenuProps extends SubMenuProps {
  isVisible: boolean
}

export const SubMenu: React.FC<StatefulSubMenuProps> = ({
  isVisible,
  items,
}) => (
  <SubMenuItemList isVisible={isVisible}>
    {items.map((subMenuItem, index) => (
      <SubMenuItem key={index} to={subMenuItem.to}>
        <ImageWrapper isVisible={isVisible} order={index}>
          <ImageWithMask
            layout={"fill"}
            objectFit={"cover"}
            mask={randomCircle(index)}
            src={subMenuItem.image.src}
          />
        </ImageWrapper>
        <Content isVisible={isVisible} order={index}>
          <Name>{subMenuItem.text}</Name>
          {subMenuItem.comment && <Comment>{subMenuItem.comment}</Comment>}
        </Content>
      </SubMenuItem>
    ))}
  </SubMenuItemList>
)

const SubMenuItemList = styled.div<{ isVisible: boolean }>`
  color: ${theme.color.darkest};

  @media ${min("l")} {
    background-color: ${theme.color.lightAccent};
    position: absolute;
    padding: 0.7rem 0.9rem;
    min-width: 28ch;
    max-width: 32ch;
    left: 0;

    transform-origin: top left;

    mask-image: url("${SquareMask.src}");
    mask-size: 100% 100%;
    mask-repeat: no-repeat;
    mask-position: center;

    ${(props) =>
      props.isVisible
        ? css`
            transform: scale(1);
            opacity: 1;
            transition: all ${theme.easing.slightBounceOut} 0.5s;
            top: 100%;
          `
        : css`
            transform: scale(0);
            opacity: 0;
            transition: all ${theme.easing.easeInBounceOut} 0.3s;
            top: 50%;
          `}
  }
`

export const SubMenuItem = styled(Link)`
  display: flex;
  gap: ${theme.size.base}rem;
  padding-left: 2.5rem;

  @media ${min("l")} {
    padding: 0.4rem 0.2rem;
  }
`

const ImageWrapper = styled.div<{ isVisible: boolean; order: number }>`
  position: relative;
  flex-shrink: 0;
  display: none;

  @media ${min("l")} {
    display: flex;
    align-self: center;

    ${(props) =>
      props.isVisible
        ? css`
            width: 4rem;
            height: 4rem;
            margin-left: 0;
            margin-right: 0;
            transition: all ${theme.easing.slightBounceOut} 0.5s
              ${props.order * 0.03}s;
          `
        : css`
            width: 0rem;
            height: 0rem;
            margin-left: 2rem;
            margin-right: 2rem;
            transition: all ${theme.easing.easeInBounceOut} 0.3s
              ${props.order * 0.025}s;
          `}
  }
`

const Content = styled.div<{ isVisible: boolean; order: number }>`
  overflow: hidden;
  position: relative;

  ${(props) =>
    props.isVisible
      ? css`
          line-height: 1.2em;
          opacity: 1;
          padding: 0.5em 0em;
          transition: all ${theme.easing.easeInOut} 0.2s ${props.order * 0.03}s;
        `
      : css`
          line-height: 0em;
          opacity: 0;
          padding: 0em;
          transition: all ${theme.easing.easeInOut} 0.12s
            ${props.order * 0.025}s;
        `}
`

export const Name = styled(Header3)`
  font-size: ${theme.size.medium}rem;
  margin: 0;
  line-height: inherit;

  @media ${min("m")} {
    font-size: ${theme.size.medium * 1.1}rem;
  }

  @media ${min("l")} {
    font-size: ${theme.size.medium}rem;
  }
`

const Comment = styled(SmallText)`
  color: ${theme.color.darkest};
  margin-bottom: 0;
  display: none;

  @media ${min("l")} {
    display: block;
    line-height: inherit;
  }
`
