import React from "react"
import { Intro, Row, FrontPageBanner } from "../../components/blocks"

/* 
    1) Destructure blocks from data
    2) Convert blocks into React Components

     const blockComponents = data.map((block: any, i: number) => {
    return blockToComponent(block, i)
  })
*/
const ROW = "acf/row"
const INTRO = "acf/intro"
const FRONT_PAGE_BANNER = "acf/front-page-banner"
const PROJECT_PREVIEW = "acf/project-preview"
const blockToComponent = (block: any) => {
  const { name, acf: props, order } = block
  let component: any = null
  switch (name) {
    case INTRO:
      component = <Intro {...props} />
      break
    case ROW:
      component = <Row {...props} rowCount={order} />
      break
    case PROJECT_PREVIEW:
      // Works off a project reference.
      // We need to furthure destructure in this case.

      const {
        title,
        slug,
        PostTypeProjectFields: projectProps,
      } = props.projectReference[0]

      const organizedProps = { title, slug, rowCount: order, ...projectProps }
      component = <Row {...organizedProps} subtitleOn={false} />

      break
    case FRONT_PAGE_BANNER:
      component = <FrontPageBanner {...props} />
      break
    default:
      // throw error
      throw new Error("A component for this block does not exists!")
  }
  return component
}

export const handleBlocks = (data: any) => {
  const blocks = data.wpPage.blocks
  const components = blocks.map((block: any) => blockToComponent(block))
  return components
}
