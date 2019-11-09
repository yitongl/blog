/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <Container>
            <p>
              <a target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/in/${social.linkedin}`}>
                LinkedIn
              </a>{` `}
              <a target="_blank" rel="noopener noreferrer" href={`https://github.com/${social.github}`}>
                GitHub
              </a>{` `}
            </p>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        social {
          linkedin
          github
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
`

export default Bio
