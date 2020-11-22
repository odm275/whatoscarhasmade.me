import { useStaticQuery, graphql } from "gatsby"
export const useQueryHomePage = () => {
  const data = useStaticQuery(
    graphql`
      query HOME_PAGE {
        wpPage(slug: { eq: "home-page" }) {
          blocks {
            name
            order
            ... on WpAcfFrontPageBannerBlock {
              acf: ACFFrontPageBannerBlockFields {
                description
                email
                fieldGroupName
                subtitle
                title
                resume {
                  mediaItemUrl
                }
              }
            }
            ... on WpAcfProjectPreviewBlock {
              name
              acf: ACFProjectPreviewBlockFields {
                projectReference {
                  ... on WpProject {
                    title
                    slug
                    PostTypeProjectFields {
                      description
                      subtitle
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
                }
              }
            }
          }
        }
      }
    `
  )
  return data
}

export default useQueryHomePage
