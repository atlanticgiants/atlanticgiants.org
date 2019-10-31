// general
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "images/atlantic-giants-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 250, maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img className={props.className} fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)

export const FluidImage = (props) => {
  return <Img {...props} style={props.style} className={props.className} fluid={props.imgSrcSet} />
}

export default Image
