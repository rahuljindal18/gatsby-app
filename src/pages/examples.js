import React from "react"
import Header from "../examples/Header"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

//set up page query in gatsby
export const data = graphql`
  query {
    site {
      id
      siteMetadata {
        title
        description
        author
        data
        person {
          age
          name
        }
      }
    }
  }
`

const examples = ({ data }) => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = data
  return (
    <Layout>
      <p>Hello from examples page</p>
      <Header />
      <h5>Author: {author}</h5>
    </Layout>
  )
}

export default examples
