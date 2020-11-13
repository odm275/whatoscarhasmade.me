import React from "react"
import { Layout, Intro, Row } from "../components"
import { useQueryAboutPage } from "../components/hooks/useQueryAboutPage"
// We need to parse blocks into the right component depending on their block name and inject their props into that component

const ROW = "acf/row"
const INTRO = "acf/intro"

function blockToComponent(block: any, order: number) {
  const { name, acf: props } = block
  let component: any = null

  switch (name) {
    case INTRO:
      component = <Intro {...props} />
      break
    case ROW:
      const rowCount = order - 1
      component = <Row {...props} rowCount={rowCount} />
      break
    default:
      // throw error
      throw new Error("A component for this block does not exists!")
  }
  return component
}

const About = () => {
  const data = useQueryAboutPage()
  console.log("data", data)
  const blockComponents = data.map((block: any, i: number) => {
    return blockToComponent(block, i)
  })
  return <Layout>{blockComponents}</Layout>
}

export default About
