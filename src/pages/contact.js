import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Contact({ data }) {
  return (
    <Layout>
      <h1>Contact {data.site.siteMetadata.title}</h1>
      <p>
      
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food. Thanks for visiting: {data.site.siteMetadata.title}.
        &nbsp; <a href="{data.site.siteMetadata.contact}">{data.site.siteMetadata.contact}</a>
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