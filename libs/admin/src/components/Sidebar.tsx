import React from "react"
import styled from "@emotion/styled"
import { IoArrowBackOutline } from "react-icons/io5"
import { User, UserBox } from "./UserBox"
import { buttonHover, theme } from "../theme"
import { Navigation, NavigationItem } from "./Navigation"

interface Section {
  title: string
  slug: string
  selected?: boolean
}

interface MainNavigationProps {
  navigations: NavigationItem[][]
  isCollapsed: boolean
  setIsCollapsed: (isCollpased: boolean) => void
  collapsedWidth: string
  notCollapsedWidth: string
  user: User
  sections: Section[]
  onSectionChange: (section: Section["slug"]) => void
}

export const Sidebar: React.FC<MainNavigationProps> = ({
  navigations,
  isCollapsed,
  setIsCollapsed,
  collapsedWidth,
  notCollapsedWidth,
  user,
  sections,
  onSectionChange,
}) => (
  <Container width={isCollapsed ? collapsedWidth : notCollapsedWidth}>
    <div>
      <ImageWrapper>
        <ResponsiveImage>
          <img src="/images/logo.svg" alt="logo" />
        </ResponsiveImage>
      </ImageWrapper>
      <nav>
        {sections.length > 1 && (
          <StyledSelect
            onChange={(e) => onSectionChange(e.currentTarget.value)}
            defaultValue={sections.find((s) => s.selected)?.slug}
          >
            {!sections.find((s) => s.selected) && (
              <option disabled selected>
                Vyberte sekci
              </option>
            )}
            {sections.map(({ title, slug }) => (
              <option key={slug} value={slug}>
                {title}
              </option>
            ))}
          </StyledSelect>
        )}
        {navigations.map((navigation, index) => (
          <Navigation
            key={index}
            items={navigation}
            isCollapsed={isCollapsed}
            notCollapsedWidth={notCollapsedWidth}
          />
        ))}
      </nav>
    </div>
    <Bottom>
      <UserBox {...user} isCollapsed={isCollapsed} />
      <Collapser
        isCollapsed={isCollapsed}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <IoArrowBackOutline />
      </Collapser>
    </Bottom>
  </Container>
)

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ width }: { width: string }) => width};
  border-right: ${theme.styles.border};
  transition: width 300ms ${theme.styles.animationFunction};
  background-color: ${theme.colors.bodyBackground};
`

interface WidthProps {
  notCollapsedWidth: string
}

const ImageWrapper = styled.div`
  max-width: 100%;
  overflow: hidden;
`

const ResponsiveImage = styled.figure`
  padding: 0 0.4rem;
  margin: 1rem 0 0;
  width: 7.6rem;
  img {
    max-width: 100%;
    height: auto;
  }
`

const Bottom = styled.div`
  display: flex;
  flex-flow: column;
`

interface CollapserProps {
  isCollapsed?: boolean
}

const Collapser = styled.button`
  cursor: pointer;
  display: block;
  background: none;
  border: none;
  border: ${theme.styles.border};
  padding: 0.4em;
  background-color: white;

  svg {
    transform: rotate(
      ${({ isCollapsed }: CollapserProps) => (isCollapsed ? "180deg" : "0")}
    );
    transition: transform 300ms ${theme.styles.animationFunction};
  }

  ${buttonHover}
`

const StyledSelect = styled.select`
  font-family: "Noto Sans Mono", sans-serif;
  font-size: 1rem;
  display: block;
  width: 100%;
  padding: 0.4em 1em;
  border: ${theme.styles.border};
`
