import { Header1, Header3 } from "../Typography/Typography"
import { randomRectangle } from "../../utils/Masks"
import { ImageWithMask } from "../ImageWithMask/ImageWithMask"
import { max, min, theme } from "../../styles/theme"
import styled from "@emotion/styled"
import React from "react"
import { keyframes } from "@emotion/react"

export interface HeroProps {
  words: string[]
  imageUrls: string[]
}

export const Hero: React.FC<HeroProps> = ({ words, imageUrls }) => (
  <HeroContainer>
    {words.map((word, index) => (
      <AnimatedHeroTitle
        className={""}
        titleCount={words.length}
        title={word}
        key={index}
        index={index}
      />
    ))}
    <ImageOverflowContainer>
      <ImageContainer>
        <ImageWithMask
          layout={"fill"}
          width={3}
          height={2}
          objectFit={"cover"}
          mask={randomRectangle(6)}
          src={imageUrls[Math.floor(Math.random() * imageUrls.length)]}
        />
      </ImageContainer>
    </ImageOverflowContainer>
  </HeroContainer>
)

const HeroTitle: React.FC<{ title: string; className: string }> = ({
  title,
  className,
}) => (
  <Headline className={className} mask={randomRectangle(3)}>
    <Title>{title}</Title>
    <SubTitle>Skauti Kralupy</SubTitle>
  </Headline>
)

const heroTitleAnimation = (
  titleCount: number,
  fadePercentage: number
) => keyframes`
  0% { opacity: 0; z-index: 20; }
  ${(100 / titleCount) * fadePercentage}% {opacity: 1; z-index: 30;}
  ${100 / titleCount}% { opacity: 1; }
  ${(100 / titleCount) * (1 + fadePercentage)}% {opacity: 0; z-index: 20; }
  100% { opacity: 0; }
`

const AnimatedHeroTitle = styled(HeroTitle)<{
  index: number
  titleCount: number
}>`
  opacity: 0;
  animation-name: ${({ titleCount }) => heroTitleAnimation(titleCount, 0.3)};
  animation-duration: ${({ titleCount }) => titleCount * 3}s;
  animation-iteration-count: infinite;
  animation-delay: ${({ index }) => index * 3}s;
`

const HeroContainer = styled.div`
  position: relative;
`

const Headline = styled.div`
  z-index: 100;
  background-color: ${theme.color.lightAccent};
  mask-image: url("${(props: { mask: { src: string } }) => props.mask.src}");
  mask-size: 100% 100%;
  mask-position: center;
  mask-repeat: no-repeat;
  position: absolute;

  @media ${max("s")} {
    padding: 0.2rem 1rem;
    margin-top: ${theme.layout.gutter * 2}rem;
  }

  @media ${min("s")} {
    padding: 0.4rem 1.5rem;
    margin-top: ${theme.layout.gutter * 2}rem;
  }

  @media ${min("m")} {
    margin-top: 0;
    padding: ${theme.layout.gutter * 2}rem ${theme.layout.gutter * 3}rem;
    top: 10%;
    left: 7%;
  }
`

const Title = styled(Header1.withComponent("p"))`
  margin-bottom: 0;
  line-break: anywhere;
  font-size: 2.2rem;

  @media ${min("m")} {
    font-size: 2.6rem;
  }

  @media ${min("l")} {
    font-size: 4rem;
  }
`

const SubTitle = styled(Header3.withComponent(Header1))`
  margin-bottom: 0;

  @media ${max("m")} {
    font-size: 1.2rem;
  }
`

const ImageOverflowContainer = styled.div`
  @media ${max("m")} {
    max-width: 100vw;
    margin: 0 -${theme.layout.gutter}rem;
    overflow: hidden;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;

  @media ${max("m")} {
    width: 140%;
    left: -20%;
  }
`
