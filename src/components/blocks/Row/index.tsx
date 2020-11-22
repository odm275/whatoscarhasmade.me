import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"
import Img from "gatsby-image"
import { useOnScreen } from "../../hooks/useOnScreen"
import { isEven } from "../../../lib/utils"

interface Props {
  title: string
  subtitle?: string | null
  description: string
  image: string
  rowCount: number
  slug?: string
  subtitleOn?: boolean
}

export const Row = ({
  title,
  subtitle = null,
  description,
  image,
  rowCount,
  slug,
  subtitleOn,
}: Props) => {
  console.log("slugggg", slug)
  const [ref, visible] = useOnScreen({
    rootMargin: "0px",
  })

  const imageSliderElement = () => {
    const fluidImage = image ? image.localFile.childImageSharp.fluid : null
    if (isEven(rowCount)) {
      return (
        <div className="row__img-wrapper w-full lg:w-1/2" ref={ref}>
          <Img
            className={`row__img-wrapper__img--left ${
              visible && "row__img-wrapper__img--slide-right"
            }`}
            fluid={fluidImage}
          />
        </div>
      )
    } else {
      return (
        <div className="row__img-wrapper w-full lg:w-1/2" ref={ref}>
          <Img
            className={`row__img-wrapper__img--right ${
              visible && "row__img-wrapper__img--slide-left"
            }`}
            fluid={fluidImage}
          />
        </div>
      )
    }
  }

  const linkProjectElement = slug ? (
    <Link
      to={`/${slug}`}
      className="inline-block text-white bg-secondary text-center p-3"
    >
      View Case Study
    </Link>
  ) : null

  const subtitleElement = subtitleOn ? <h3>{subtitle}</h3> : null

  return (
    <div
      className={`row flex flex-col my-40 md:items-center ${
        isEven(rowCount) ? "lg:flex-row-reverse" : "lg:flex-row"
      } `}
    >
      {imageSliderElement()}
      <div
        className={`mt-5 max-w-none md:max-w-xl ${
          isEven(rowCount) ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        <h3>{title}</h3>
        <h4>{subtitleElement}</h4>
        {parse(description)}
        {linkProjectElement}
      </div>
    </div>
  )
}
