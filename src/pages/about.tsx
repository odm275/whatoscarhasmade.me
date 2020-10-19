import React from "react"
import { Layout, Intro, Row } from "../components"
import { useQueryAboutPage } from "../components/hooks/useQueryAboutPage"

// We need to parse blocks into the right component depending on their block name and inject their props into that component

const ROW = "acf/row"
const INTRO = "acf/intro"

function blockToComponent(block: any) {
  const { name, acf: props } = block
  let component: any = null
  console.log("name", name)
  switch (name) {
    case ROW:
      component = <Row {...props} />
      break
    case INTRO:
      component = <Intro {...props} />
      break
    default:
      // throw error
      throw new Error("A component for this block does not exists!")
  }
  return component
}

const About = () => {
  const data = useQueryAboutPage()
  const blockComponents = data.map((block: any) => blockToComponent(block))
  console.log(blockComponents)
  return <Layout>{blockComponents}</Layout>
}

export default About
