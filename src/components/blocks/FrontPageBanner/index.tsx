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
    <div className="bg-secondary front-page-banner">
      <div className="-mx-6 p-6 lg:max-w-screen-xl w-full">
        <h4 className="text-white my-3">{title}</h4>
        <h1 className="text-white my-3">{subtitle}</h1>
        <div className="text-white">{parse(description)}</div>
        <div className="flex flex-col">
          <a
            className="text-secondary bg-white text-center my-3 p-3 font-bold"
            href={`mailto:${email}`}
          >
            {email}
          </a>
          <a
            className="text-secondary bg-white text-center p-3 font-bold"
            href={resume.mediaItemUrl}
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  )
}
