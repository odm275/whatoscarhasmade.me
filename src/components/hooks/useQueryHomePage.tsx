import { useStaticQuery, graphql } from "gatsby"
export const useQueryHomePage = () => {
  const data = useStaticQuery(
    graphql`
      query HOME_PAGE {
        wpPage(slug: { eq: "home-page" }) {
          blocks {
            name
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
          }
        }
      }
    `
  )
  return data
}

export default useQueryHomePage
