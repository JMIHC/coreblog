/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import SEO from './seo'
import styled from 'styled-components'

const Header = styled.h1`
  display: flex;
  justify-content: center;
  margin: 5px;
`

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
            width: 320,
            display: 'flex',
            flexDirection: 'column',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
        >
          <Header>What I learned after my Father died</Header>
          {children}
          <footer>Built by the Cosmic Fisherman ©{new Date().getFullYear()}</footer>
        </div>
      </>
    )}
  />
)

export default Layout
