import React from "react"
import parse from "html-react-parser"
import Img from "gatsby-image"

interface Props {
  title: string
  subTitle?: string | null
  description: string
  image: string
}

export const Row = ({ title, subTitle = null, description, image }: Props) => {
  return (
    <div className="flex flex-col">
      <div>
        <img src={image} />
      </div>
      <div>
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
        <div>{parse(description)}</div>
      </div>
    </div>
  )
}
