// general
import React from "react"
import component from './../components'
// components
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    dataJson {
      homePage {
        components {
          id
          content {
            title
            text
            btnText
            btnHref
            color
            href
            imgSrc {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imgOption
            target
          }
        }
      }
    } 
  }`

const Index = ({data}) => {
  const components = data.dataJson.homePage.components
  return <Layout>
    <SEO title="Atlantic Giants" keywords={[`Atlantic Giants`, `Hugo Vau`, `Oceans`, `Oceanos`, 'Nazaré']} />
    {components && components.map(comp => component(comp.id, comp) )}
  </Layout>
}

export default Index
