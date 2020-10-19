import { useStaticQuery, graphql } from "gatsby"
export const useQueryAboutPage = () => {
  const data = useStaticQuery(
    graphql`
      query ABOUT_PAGE {
        wpPage(slug: { eq: "about" }) {
          blocks {
            ... on WpAcfIntroBlock {
              acf: ACFIntroBlockFields {
                description
                title
                subtitle
              }
            }
            ... on WpAcfRowBlock {
              dynamicContent
              originalContent
              acf: ACFRowBlockFields {
                description
                subtitle
                title
              }
            }
            name
          }
        }
      }
    `
  )
  return data.wpPage.blocks
}

export default useQueryAboutPage
