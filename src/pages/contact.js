import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Contact({ data }) {
  return (
    <Layout>
      <h1>Contact {data.site.siteMetadata.title}</h1>
      <p>
      
        Thanks for visiting Sweet Swish. If you have questions or would like to be featured please contact us at:
        {data.site.siteMetadata.title}.
        &nbsp; <a href="mailto:info@nalumedia.com">{data.site.siteMetadata.contact}</a>
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        contact
      }
    }
  }
  
`