import React from "react"
import parse from "html-react-parser"

interface Props {
  title: string
  subtitle: string
  description: string
}

export const Intro = ({ subtitle, title, description }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div>{parse(description)}</div>
    </div>
  )
}
