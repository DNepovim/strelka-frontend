import styled from "@emotion/styled"
import { Header1, Header3 } from "../Typography/Typography"
import { randomRectangle } from "../../utils/Masks"
import { ImageWithMask } from "../ImageWithMask/ImageWithMask"
import { TypeAnimation } from "react-type-animation"
import { max, min, theme } from "../../styles/theme"

export interface HeroProps {
  words: string[]
  imageUrls: string[]
}

export const Hero: React.FC<HeroProps> = ({ words, imageUrls }) => {
  const delayMS = 3000
  // Words need a common first character so that the headline doesn't become empty (and with height 0), which leads to content jump
  const wordSequence = words.map((word) => [`​${word}`, delayMS]).flat()

  return (
    <HeroContainer>
      <Headline mask={randomRectangle(3)}>
        <Title>
          <TypeAnimation
            sequence={wordSequence}
            cursor={false}
            speed={30}
            wrapper={"span"}
            repeat={Infinity}
          ></TypeAnimation>
        </Title>
        <SubTitle>Skauti Kralupy</SubTitle>
      </Headline>
      <ImageOverflowContainer>
        <ImageContainer>
          <ImageWithMask
            layout={"responsive"}
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
}

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
    font-size: 3rem;
  }

  @media ${min("xl")} {
    font-size: 4rem;
  }
`

const SubTitle = styled(Header3.withComponent(Header1))`
  margin-bottom: 0;
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
  @media ${max("m")} {
    width: 140%;
    left: -20%;
  }
`
