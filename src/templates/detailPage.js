// general
import React from "react"
import component from './../components'
// components
import DetailTitle from "../components/DetailTitle";
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    dataJson {
      detailedPages{
        id
        seo
        title
        subTitle
        text
        components {
          id
          mode
          title
          customProps
          style
          content {
            id
            title
            text
            subTitle
            href
            imgSrc {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            subContent {
              text
            }
          }
        }
      }
    }
  }`

const DetailPage = ({pageContext, data}) => {
  const {seo, title, subTitle, text, components} = data.dataJson.detailedPages.find(page => page.id === pageContext.id)
  return <Layout>
    <SEO title={seo ? seo : title} keywords={[`gatsby`, `application`, `react`]} />
    <DetailTitle title={title} subTitle={subTitle} text={text}/>
    {components && components.map(comp => component(comp.id, comp) )}
  </Layout>
}

export default DetailPage
