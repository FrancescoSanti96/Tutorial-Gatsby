import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="Image of me"
        src="https://francescosanti96.github.io/static/media/me.3684cb18.jpg" />
        {/* <StaticImage alt="Logo"
        src="../images/icon.png" /> */}
    </Layout>
    
  )
}

export default IndexPage