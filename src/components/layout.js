/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

// general
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import PropTypes from "prop-types"
import React from "react"
// styles
import "./layout.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        dataJson {
          navBar {
            id
            title
            href
            dropDown {
              id
              title
              href
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} pages={data.dataJson.navBar} />
        <div className='layout-wrapper'>
          <main>{children}</main>
        </div>
        <footer className='footer'>
          <p> Atlantic Giants 2019</p>
          <p>{'made with ❤️ by'} <a target='_blank' rel='noopener noreferrer' href='https://github.com/atlanticgiants/atlanticgiants.org#contributors'>volunteers</a></p>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
