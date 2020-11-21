import React from "react"
import { Layout } from "../components"
import { useQueryAboutPage } from "../components/hooks/useQueryAboutPage"
import { handleBlocks } from "../lib/utils/handleBlocks"

const About = () => {
  const data = useQueryAboutPage()
  const blocks = handleBlocks(data)

  return <Layout>{blocks}</Layout>
}

export default About
