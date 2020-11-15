import React from "react"
import parse from "html-react-parser"

interface Props {
  title: string
  subtitle: string
  description: string
}

export const Intro = ({ subtitle, title, description }: Props) => {
  return (
    <div className="mt-10 mb-12">
      <h1>| {title}</h1>
      <h2 className="py-2">{subtitle}</h2>
      <div>{parse(description)}</div>
    </div>
  )
}
