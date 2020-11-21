import React from "react"
import parse from "html-react-parser"
import Img from "gatsby-image"
import { useOnScreen } from "../../hooks/useOnScreen"
import { isEven } from "../../../lib/utils"

interface Props {
  title: string
  subTitle?: string | null
  description: string
  image: string
  rowCount: number
}

export const Row = ({
  title,
  subTitle = null,
  description,
  image,
  rowCount,
}: Props) => {
  const [ref, visible] = useOnScreen({
    rootMargin: "0px",
  })

  const imageSliderElement = () => {
    if (isEven(rowCount)) {
      return (
        <div className="row__img-wrapper w-full lg:w-1/2" ref={ref}>
          <Img
            className={`row__img-wrapper__img--left ${
              visible && "row__img-wrapper__img--slide-right"
            }`}
            fluid={image.localFile.childImageSharp.fluid}
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
            fluid={image.localFile.childImageSharp.fluid}
          />
        </div>
      )
    }
  }

  return (
    <div
      className={`row flex flex-col my-40 md:items-center ${
        isEven(rowCount) ? "lg:flex-row-reverse" : "lg:flex-row"
      } `}
    >
      {imageSliderElement()}
      <div
        className={`pt-5 max-w-none md:max-w-xl ${
          isEven(rowCount) ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
        <div>{parse(description)}</div>
      </div>
    </div>
  )
}
