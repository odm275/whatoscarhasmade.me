import { useStaticQuery, graphql } from "gatsby"
export const useQueryAboutPage = () => {
  const data = useStaticQuery(
    graphql`
      query ABOUT_PAGE {
        wpPage(slug: { eq: "about" }) {
          blocks {
            name
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
                image {
                  altText
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 750, maxHeight: 370) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return data.wpPage.blocks
}

export default useQueryAboutPage
