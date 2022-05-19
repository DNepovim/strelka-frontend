import React from "react"
import { Paragraph as ParagraphProps, Style } from "../../../types/RichText"
import { Text as BaseText } from "../Typography/Typography"
import styled from "@emotion/styled"
import { min, theme } from "../../styles/theme"
import { Image } from "../Image/Image"

const StyledText: React.FC<{ style?: Style }> = ({ style, children }) => {
  switch (style) {
    case Style.Bold:
      return <BoldText>{children}</BoldText>
    case Style.Italic:
      return <ItalicText>{children}</ItalicText>
    default:
      return <>{children}</>
  }
}

export const Paragraph: React.FC<ParagraphProps> = (props) => (
  <>
    {props.textNodes.length != 0 ? (
      <Text>
        {props.image && <FloatedImage image={props.image} />}
        {props.textNodes.map((node, index) =>
          node.href ? (
            <ContentLink href={node.href} key={index}>
              <StyledText style={node.style}>{node.content}</StyledText>
            </ContentLink>
          ) : (
            <StyledText key={index} style={node.style}>
              {node.content}
            </StyledText>
          )
        )}
      </Text>
    ) : (
      props.image && <CenteredImage image={props.image} />
    )}
  </>
)

const FloatedImage = styled(Image)`
  height: auto;
  width: 90%;
  margin: ${theme.size.base}rem auto;
  margin-top: 0;

  img {
    border-radius: 0.4rem;
  }
  
  @media ${min("m")}{
    width: 50%;
    height: auto;
    margin: ${theme.size.base}rem;
    margin-right: 0;
    margin-bottom; ${theme.size.base * 0.5}rem;
    margin-top: ${theme.size.base * 0.5}rem;
    float: right;
  } 
  
  @media ${min("l")}{   
    width: 40%;
    height: auto;
  }
`

const CenteredImage = styled(Image)`
  width: 25rem;
  height: auto;
  margin: ${theme.size.base}rem auto;
  img {
    border-radius: 0.4rem;
  }
`

const Text = styled(BaseText)`
  margin: 0 0 ${theme.size.base}rem;
  max-width: 80ch;
  overflow-y: auto;
`

const ContentLink = styled(Text.withComponent("a"))`
  color: ${theme.color.darkAccent};
  text-decoration: underline;
  text-decoration-thickness: 0.14em;
  font-weight: 600;
  transition: background-color ${theme.timing.fast}, color ${theme.timing.fast};

  &:hover {
    color: ${theme.color.darkest};
    background-color: ${theme.color.lightAccent};
  }
`

const BoldText = styled.span`
  font-weight: bold;
`
const ItalicText = styled.span`
  font-style: italic;
`
