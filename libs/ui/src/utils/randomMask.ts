import Rectangle1 from "../assets/vectors/potatoes/rectangle_1.svg"
import Rectangle2 from "../assets/vectors/potatoes/rectangle_2.svg"
import Rectangle3 from "../assets/vectors/potatoes/rectangle_3.svg"
import Rectangle4 from "../assets/vectors/potatoes/rectangle_4.svg"
import Rectangle5 from "../assets/vectors/potatoes/rectangle_5.svg"

import Circle1 from "../assets/vectors/potatoes/circle_1.svg"
import Circle2 from "../assets/vectors/potatoes/circle_2.svg"
import Circle3 from "../assets/vectors/potatoes/circle_3.svg"
import Circle4 from "../assets/vectors/potatoes/circle_4.svg"
import Circle5 from "../assets/vectors/potatoes/circle_5.svg"
import Circle6 from "../assets/vectors/potatoes/circle_6.svg"
import Circle7 from "../assets/vectors/potatoes/circle_7.svg"
import Circle8 from "../assets/vectors/potatoes/circle_8.svg"

const circles = [
  Circle1,
  Circle2,
  Circle3,
  Circle4,
  Circle5,
  Circle6,
  Circle7,
  Circle8,
]

const rectangles = [Rectangle1, Rectangle2, Rectangle3, Rectangle4, Rectangle5]

const randomItem =
  (list: any[]) =>
  (index: number = 0) =>
    list[(index * 13 + 11) % list.length]

export const randomCircle = randomItem(circles)
export const randomRectangle = randomItem(rectangles)
