import React from "react"
import { Layout } from "../components"
import { handleBlocks } from "../lib/utils/handleBlocks"

import useQueryHomePage from "../components/hooks/useQueryHomePage"
const IndexPage = () => {
  const data = useQueryHomePage()
  const blocks = handleBlocks(data)

  return <Layout>{blocks}</Layout>
}

export default IndexPage
