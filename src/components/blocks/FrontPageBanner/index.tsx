import React from "react"
import parse from "html-react-parser"

interface Props {
  title: string
  subtitle: string
  description: any
  email: string
  resume: any
}

export const FrontPageBanner = ({
  title,
  subtitle,
  email,
  description,
  resume,
}: Props) => {
  return (
    <div className="bg-primary -mx-6 p-6">
      <h4 className="text-white my-3">{title}</h4>
      <h1 className="text-white my-3">{subtitle}</h1>
      <div className="text-white">{parse(description)}</div>
      <div className="flex flex-col">
        <a
          className="text-primary bg-white text-center my-3 p-3"
          href={`mailto:${email}`}
        >
          {email}
        </a>
        <a
          className="text-primary bg-white text-center p-3"
          href={resume.mediaItemUrl}
        >
          Download CV
        </a>
      </div>
    </div>
  )
}
