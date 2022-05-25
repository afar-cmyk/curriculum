import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import metaImage from '../images/twitter.jpg'

const Seo = ({ description, lang, meta, title, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            image
            siteUrl
          }
        }
      }
    `
  )
  const siteImage = image || metaImage
  const finalImage = `${site.siteMetadata.siteUrl}${siteImage}`
  const keywords = site.siteMetadata.keywords
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  console.log(finalImage)
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          name: `keywords`,
          content: keywords
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: finalImage
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:image`,
          content: finalImage
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``
}

Seo.propTypes = {
  description: PropTypes.string,
  siteImage: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}

export default Seo
