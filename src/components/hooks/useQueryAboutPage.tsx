import { useStaticQuery, graphql } from "gatsby"
export const useQueryAboutPage = () => {
  const data = useStaticQuery(
    graphql`
      query ABOUT_PAGE {
        wpPage(slug: { eq: "about" }) {
          blocks {
            name
            order
            ... on WpAcfRowBlock {
              acf: ACFRowBlockFields {
                description
                subtitle
                title
                image {
                  altText
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
            ... on WpAcfIntroBlock {
              acf: ACFIntroBlockFields {
                description
                title
                subtitle
              }
            }
          }
        }
      }
    `
  )
  return data
}

export default useQueryAboutPage
