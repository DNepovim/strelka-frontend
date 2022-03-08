import { GlobalStyles, MetaTags, theme } from "@local/lib"
import { Header } from "@local/lib/src/ui/blocks/Header/Header"
import Head from "next/head"
import { linkData } from "@local/lib/src/ui/mockData/mockData"
import { RichText } from "@local/lib/src/ui/blocks/RichText/RichText"
import { Paragraph } from "@local/lib/src/types/RichText"
import { Heading1 } from "@local/lib/src/ui/blocks/Heading1/Heading1"
import styled from "@emotion/styled"
import { Button, Input } from "antd"
import { Block } from "@local/lib/src/ui/components/Block/Block"
import { Container } from "@local/lib/src/ui/components/Container/Container"
import { useState } from "react"

function coords(X: number, Y: number, Z: number) {
  return { X: X, Y: Y, Z: Z }
}

function cube(X: number, Y: number, Z: number, value: number) {
  return { position: { X: X, Y: Y, Z: Z }, value: value }
}

export default function ErrorPage() {
  const errorMessage: Paragraph[] = [
    { textNodes: [{ content: "Tahle stránka neexistuje." }] },
    {
      textNodes: [
        { content: "Můžeš jít zpátky na " },
        { content: "úvod", href: "/" },
        { content: ", nebo zkusit zlomit rekord:" },
      ],
    },
  ]

  const [rotationX, setRotationX] = useState(0)
  const [rotationY, setRotationY] = useState(0)
  const [rotationZ, setRotationZ] = useState(0)

  const [subCubes, setSubCubes] = useState([
    cube(0, 0, 0, 0),
    cube(3, 3, 3, 0),
    cube(0, 3, 0, 0),
    cube(3, 0, 0, 0),
    cube(3, 0, 3, 0),
    cube(0, 0, 3, 0),
  ])

  function addCube() {
    setSubCubes(subCubes.concat([cube(1, 1, 1, 0)]))
  }

  interface ColumnCoords {
    X?: number
    Y?: number
    Z?: number
  }

  interface Coords {
    X: number
    Y: number
    Z: number
  }

  interface SubCube {
    position: Coords
    value: number
  }

  function processMovement(
    targetColumn: "X" | "Y" | "Z",
    sortDecreasing: boolean,
    side: number = 2
  ) {
    function columnHash(position: Coords) {
      const columns: ("X" | "Y" | "Z")[] = ["X", "Y", "Z"]
      let hash = ""
      columns
        .filter((value) => value != targetColumn)
        .forEach((column) => (hash += position[column].toString() + ","))

      return hash
    }

    const columns = new Map<string, SubCube[]>()

    subCubes.forEach(({ position, value }) => {
      const key = columnHash(position)

      if (columns.has(key))
        columns.get(key).push({ position: position, value: value })
      else columns.set(key, [{ position: position, value: value }])
    })

    console.log(columns)

    const newSubCubes: SubCube[] = []

    columns.forEach((cubes) => {
      cubes.sort((first, second) =>
        first.position[targetColumn] < second.position[targetColumn]
          ? sortDecreasing
            ? -1
            : 1
          : second.position[targetColumn] < first.position[targetColumn]
          ? sortDecreasing
            ? 1
            : -1
          : 0
      )

      const mergedCubes: SubCube[] = []

      mergedCubes.push(
        cubes.reduce((prev, next) => {
          if (prev.value === next.value)
            return { position: next.position, value: next.value + 1 }

          mergedCubes.push(prev)
          return next
        })
      )

      let counter = sortDecreasing ? side - 1 : 0
      const cubeBatch: SubCube[] = []
      mergedCubes.reverse().forEach((cube) => {
        cube.position[targetColumn] = counter
        counter += sortDecreasing ? -1 : 1
        cubeBatch.push(cube)
      })

      newSubCubes.push(...(sortDecreasing ? cubeBatch.reverse() : cubeBatch))
    })

    if (newSubCubes.length === side * side * side) {
      console.warn("Game over")
      return
    }

    function randomCube() {
      return cube(
        Math.round(Math.random() * (side - 1)),
        Math.round(Math.random() * (side - 1)),
        Math.round(Math.random() * (side - 1)),
        0
      )
    }

    const cubes: SubCube[] = []
    for (let x = 0; x < side; x += 1)
      for (let y = 0; y < side; y += 1)
        for (let z = 0; z < side; z += 1) cubes.push(cube(x, y, z, 0))

    for (let i = 0; i < cubes.length; i += 1) {
      const shift = Math.round(Math.random() * cubes.length)
      if (
        newSubCubes.filter((cube) => {
          const refCubePos = cubes[(i + shift) % cubes.length]
          return (
            cube.position.X == refCubePos.position.X &&
            cube.position.Y == refCubePos.position.Y &&
            cube.position.Z == refCubePos.position.Z
          )
        }).length === 0
      ) {
        newSubCubes.push(cubes[(i + shift) % cubes.length])
        setSubCubes(newSubCubes)
        return
      }
    }
  }

  return (
    <div>
      <Head>
        <MetaTags
          title={""}
          description={""}
          brandColor={theme.color.lightAccent}
          themeColor={theme.color.darkAccent}
          url={""}
          image=""
          manifest=""
          icons={{
            appleTouchIcon: "",
            largeIcon: "",
            smallIcon: "",
            maskIcon: "",
          }}
        />
      </Head>

      <GlobalStyles />

      <main
        onKeyDown={(event) => {
          event.preventDefault()
          switch (event.key) {
            case "ArrowUp":
              // process by individual columns, in order. Detect loose if moving not available
              // working on Y axis (going towards positive Y)

              processMovement("Y", false)

              // add random block randomly placed in empty location (or detect loose if no space is available)

              console.log("Up move")
              break
            case "ArrowDown":
              processMovement("Y", true)
              console.log("Down move")

              break

            case "ArrowLeft":
              processMovement("X", false)
              console.log("Left move")
              break

            case "ArrowRight":
              processMovement("X", true)
              console.log("Right move")
              break

            case "PageUp":
              processMovement("Z", true)
              console.log("Front move")
              break

            case "PageDown":
              processMovement("Z", false)
              console.log("Back move")
              break

            default:
              console.warn("No arrow key pressed")
          }
        }}
      >
        <Header content={linkData} />
        <Heading1 content={"Jejda!"} />
        <RichText paragraphs={errorMessage} />
        <Block id="">
          <Container>
            <p>
              X axis rotation:
              <Input
                type="range"
                min="0"
                max="360"
                defaultValue="0"
                className="slider"
                id="X"
                onChange={(event) => setRotationX(parseInt(event.target.value))}
              />
            </p>
            <p>
              Y axis rotation:
              <Input
                type="range"
                min="0"
                max="360"
                defaultValue="0"
                className="slider"
                id="Y"
                onChange={(event) => setRotationY(parseInt(event.target.value))}
              />
            </p>
            <p>
              Z axis rotation:
              <Input
                type="range"
                min="0"
                max="360"
                defaultValue="0"
                className="slider"
                id="Z"
                onChange={(event) => setRotationZ(parseInt(event.target.value))}
              />
            </p>
            <Button onClick={() => setSubCubes([])}>Clear cubes</Button>
            <Button
              onClick={() => {
                setRotationX(0)
                setRotationY(0)
                setRotationZ(0)
              }}
            >
              Face X axis
            </Button>
            <Button
              onClick={() => {
                setRotationX(90)
                setRotationZ(0)
              }}
            >
              Face Y axis
            </Button>
            <Button
              onClick={() => {
                setRotationY(90)
                setRotationX(0)
              }}
            >
              Face Z axis
            </Button>
          </Container>
        </Block>
        <Bug>
          <ParentCube
            id="parent-cube"
            size={16}
            rotation={{ X: rotationX, Y: rotationY, Z: rotationZ }}
            childCount={2}
            subCubes={subCubes}
          />
        </Bug>
      </main>
    </div>
  )
}

interface CubeProps {
  size: number
  rotation: { X: number; Y: number; Z: number }
  translation?: { X: number; Y: number; Z: number }
  className?: string
  id?: string
  value?: number
}

interface ContainerCubeProps extends CubeProps {
  subCubes: { position: { X: number; Y: number; Z: number }; value: number }[]
  childCount: number
}

const Cube: React.FC<CubeProps> = (props) => (
  <CubeWrapper
    id={props.id}
    size={props.size}
    value={props.value}
    rotation={props.rotation}
    translation={props.translation}
    className={props.className}
  >
    <Wall>{Math.pow(2, props.value)}</Wall>
    <Wall>{Math.pow(2, props.value)}</Wall>
    <Wall>{Math.pow(2, props.value)}</Wall>
    <Wall>{Math.pow(2, props.value)}</Wall>
    <Wall>{Math.pow(2, props.value)}</Wall>
    <Wall>{Math.pow(2, props.value)}</Wall>
  </CubeWrapper>
)

function positionBlock(
  position: { X: number; Y: number; Z: number },
  parentSize: number,
  childSize: number
) {
  const childCount = parentSize / childSize

  const transform = {
    X: position.X * childSize,
    Y: position.Y * childSize,
    Z: (childCount / 2 - 1 + 0.5 - position.Z) * childSize,
  }

  return `translateX(${transform.X}rem) translateY(${transform.Y}rem) translateZ(${transform.Z}rem)`
}

const opacity = 0.8
const colors = [
  `rgba(100, 100, 100, ${opacity})`,
  `rgba(52,142,38,${opacity})`,
  `rgba(70,162,190,${opacity})`,
  `rgba(3,60,204,${opacity})`,
  `rgba(157,9,171,${opacity})`,
  `rgba(193,159,14,${opacity})`,
  `rgba(114,43,11,${opacity})`,
  `rgba(255,0,0,${opacity})`,
]

const ParentCube: React.FC<ContainerCubeProps> = ({
  id,
  className,
  size,
  childCount,
  subCubes,
  rotation,
}) => (
  <CubeWrapper size={size} rotation={rotation} className={className} id={id}>
    <Wall></Wall>
    <Wall></Wall>
    <Wall></Wall>
    <Wall></Wall>
    <Wall></Wall>
    <Wall></Wall>
    {subCubes.map((cube, index) => (
      <Cube
        key={index}
        size={size / childCount}
        rotation={{ X: 0, Y: 0, Z: 0 }}
        translation={cube.position}
        value={cube.value}
      />
    ))}
  </CubeWrapper>
)

const CubeWrapper = styled.div`
  transform-style: preserve-3d;
  height: ${(props: CubeProps) => props.size}rem;
  width: ${(props: CubeProps) => props.size}rem;
  transform: ${(props: CubeProps) =>
      `rotateX(${props.rotation.X}deg) rotateY(${props.rotation.Y}deg) rotateZ(${props.rotation.Z}deg)`}
    ${(props: CubeProps) =>
      props.translation
        ? positionBlock(props.translation, 16, props.size) + ";"
        : ";"};
  transform-origin: ${(props: CubeProps) => props.size / 2}rem;
  position: absolute !important;
  background-color: transparent !important;
  border: none !important;
  transition: transform 0.5s ease-in-out;

  & > div {
    border: 2px solid black;
    background-color: rgba(10, 10, 10, 0.1);
    width: ${(props: CubeProps) => props.size}rem;
    height: ${(props: CubeProps) => props.size}rem;
    position: absolute;
    transform-style: preserve-3d;
    transition: transform 0.2s ease-in-out;
    ${(props: CubeProps) =>
      props.value !== undefined
        ? `background-color: ${colors[props.value % colors.length]};`
        : ""}

    &:nth-of-type(1) {
      transform: translateZ(${(props: CubeProps) => props.size / 2}rem);
    }

    &:nth-of-type(2) {
      transform: rotateY(90deg)
        translateZ(${(props: CubeProps) => props.size / 2}rem);
    }

    &:nth-of-type(3) {
      transform: rotateY(180deg)
        translateZ(${(props: CubeProps) => props.size / 2}rem);
    }

    &:nth-of-type(4) {
      transform: rotateY(90deg)
        translateZ(${(props: CubeProps) => -props.size / 2}rem);
    }

    &:nth-of-type(5) {
      transform: rotateX(-90deg)
        translateZ(${(props: CubeProps) => -props.size / 2}rem);
    }

    &:nth-of-type(6) {
      transform: rotateX(90deg)
        translateZ(${(props: CubeProps) => -props.size / 2}rem);
    }
  }
`

const Wall = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`

const Bug = styled.div`
  font-size: ${theme.size.base}rem;
  width: 100%;
  height: 32rem;
  z-index: 10000;
  padding: 0;
  margin: 0;
  transform-style: preserve-3d;
  position: relative;
  box-sizing: border-box;
  perspective: 50rem;

  display: flex;
  justify-content: center;
  align-items: center;
`
