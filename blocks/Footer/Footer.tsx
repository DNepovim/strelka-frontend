import { HeaderProps } from "../Header/Header"
import { Column, Container, Row } from "../../components/Layout/Layout"
import styled from "@emotion/styled"
import { max, min, theme } from "../../styles/theme"
import { EmptyRow } from "../VerticalSpace/VerticalSpace"
import React, { useRef, useState } from "react"
import {
  FooterArt,
  FooterArtList,
} from "../../assets/vectors/footerArt/footerArt"
import {
  MenuItem,
  MenuItemContent,
  SubMenuToggle,
} from "../../components/Menu/Menu"
import {
  Name,
  StatefulSubMenuProps,
  SubMenuItem as SubMenuItemBase,
} from "../../components/SubMenu/SubMenu"
import { css } from "@emotion/react"
import { doIfMatches } from "../../utils/doIfMatches"
import useOnClickOutside from "use-onclickoutside"

export interface FooterProps extends HeaderProps {
  footerDecoration?: FooterArt
}

export const Footer: React.FC<FooterProps> = (props) => {
  const voidId = -1
  const [activeSubMenuId, setActiveSubMenuId] = useState(voidId)
  const isActive = (id: number): boolean => activeSubMenuId === id
  const toggleActiveSubMenuId = (id: number) =>
    setActiveSubMenuId(isActive(id) ? voidId : id)

  const footerRef = useRef()

  useOnClickOutside(footerRef, () => setActiveSubMenuId(voidId))

  return (
    <Background>
      <FooterContainer>
        <FooterRow>
          <FooterDecoration>
            {React.createElement(
              FooterArtList[props.footerDecoration ?? FooterArt.Train],
              {}
            )}
          </FooterDecoration>
          <FooterColumn col={12}>
            <EmptyRow height={5} />
            <FooterWrapper ref={footerRef}>
              {props.items.map((menuItem, menuId) => (
                <MenuItem key={menuId}>
                  {menuItem.subMenu ? (
                    <>
                      <SubMenuToggle
                        to={""}
                        onClick={doIfMatches(
                          max("l"),
                          toggleActiveSubMenuId,
                          menuId
                        )}
                        isActive={isActive(menuId)}
                      >
                        {menuItem.text}
                      </SubMenuToggle>
                      <SubMenu
                        isVisible={isActive(menuId)}
                        {...menuItem.subMenu}
                      />
                    </>
                  ) : (
                    <MenuItemContent to={menuItem.to}>
                      {menuItem.text}
                    </MenuItemContent>
                  )}
                </MenuItem>
              ))}
            </FooterWrapper>
          </FooterColumn>
        </FooterRow>
        <EmptyRow height={5} />
      </FooterContainer>
    </Background>
  )
}

const FooterColumn = styled(Column)`
  z-index: 20;
`

const FooterWrapper = styled.nav`
  @media ${min("l")} {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 1.2rem;
    margin-top: ${theme.layout.gutter * 2}rem;
  }
`

const FooterRow = styled(Row)`
  margin: 0;
`

const Background = styled.div`
  width: calc(100% + 2 * ${theme.layout.gutter}rem);
  position: relative;
  background-color: ${theme.color.lightAccent};
  margin: 0 -${theme.layout.gutter}rem;
  margin-top: ${theme.layout.gutter * 10}rem;
  margin-bottom: -${theme.layout.gutter * 2}rem;
`

const FooterContainer = styled(Container)`
  position: relative;
`

const FooterDecoration = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;

  > svg {
    width: 100%;
    height: auto;
  }

  path.lightest {
    fill: ${theme.color.lightest};
  }
  path.lightAccent {
    fill: ${theme.color.lightAccent};
  }
  path.darkAccent {
    fill: ${theme.color.darkAccent};
  }
  path.darkest {
    fill: ${theme.color.darkest};
  }

  @media ${max("m")} {
    width: 200%;
    right: 0;
  }
`

export const SubMenu: React.FC<StatefulSubMenuProps> = (props) => (
  <SubMenuItemList isVisible={props.isVisible}>
    {props.items.map((subMenuItem, index) => (
      <SubMenuItemWrapper key={index}>
        <SubMenuItem to={subMenuItem.to}>{subMenuItem.text}</SubMenuItem>
      </SubMenuItemWrapper>
    ))}
  </SubMenuItemList>
)

const SubMenuItemList = styled.div<{ isVisible: boolean }>`
  ${(props) =>
    props.isVisible
      ? css`
          line-height: 2.3rem;
          opacity: 1;
          transition: all 0.3s ${theme.easing.easeInOut};
        `
      : css`
          line-height: 0rem;
          opacity: 0;
          transition: all 0.3s ${theme.easing.easeInOut};
        `}

  @media ${min("l")} {
    padding-top: 0.5em;
    line-height: 2.3rem;
    opacity: 1;
  }
`

const SubMenuItem = styled(Name.withComponent(SubMenuItemBase))`
  line-height: inherit;

  @media ${min("l")} {
    font-size: 1.4rem;
    padding: 0 0.75rem;
  }
`

const SubMenuItemWrapper = styled.div`
  overflow: hidden;
`
