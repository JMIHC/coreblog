/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import SEO from './seo'
import '../elements/style.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO
          title="What I learned after my father died"
          keywords={[`men`, `new`, `learning`, `father`, `fatherhood`, `stepdad`]}
        />
        <div
          style={{
            maxWidth: 600,
            display: 'flex',
            flexDirection: 'column',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
        >
          {children}
          <br />
          <footer>Built by the Cosmic Fisherman ©{new Date().getFullYear()}</footer>
        </div>
      </>
    )}
  />
)

export default Layout
