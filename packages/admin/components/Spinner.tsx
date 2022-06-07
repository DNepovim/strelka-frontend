import React from "react"
import Loader from "react-loader-spinner"
import { Centered } from "./Centered"

export const Spinner: React.FC = () => (
  <Centered>
    <Loader type="Watch" color="#999" height={50} width={50} />
  </Centered>
)
