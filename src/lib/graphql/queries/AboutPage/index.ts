export const ABOUT_PAGE = `
  query ABOUT_PAGE {
    wpPage(slug: { eq: "about" }) {
      blocks {
        ... on WpAcfIntroBlock {
          ACFIntroBlockFields {
            description
            heading
            subheading
          }
        }
        ... on WpAcfRowBlock {
          dynamicContent
          originalContent
          ACFRowBlockFields {
            description
            subtitle
            title
          }
        }
      }
    }
  }
`
