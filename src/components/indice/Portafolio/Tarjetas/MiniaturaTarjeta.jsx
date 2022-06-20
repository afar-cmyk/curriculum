import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

const MiniaturaTarjeta = (props) => {
  const { imagen, titulo } = props

  const data = useStaticQuery(graphql`
    {
      curriculum: file(relativePath: { eq: "curriculum.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, formats: [AUTO, AVIF])
        }
      }
      rayo: file(relativePath: { eq: "rayo.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, formats: [AUTO, AVIF])
        }
      }
      bibliotech: file(relativePath: { eq: "bibliotech.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, formats: [AUTO, AVIF])
        }
      }
      btc2cop: file(relativePath: { eq: "btc2cop.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, formats: [AUTO, AVIF])
        }
      }
    }
  `)

  let miniaturaTarjeta = {
    width: '100%',
    minHeight: '60%',
    backgroundColor: '#6a6a6a',
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  }

  const image = getImage(data[imagen])

  return (
    <GatsbyImage
      className={`miniatura-tarjeta ${titulo}`}
      image={image}
      alt={`Imagén del proyecto ${titulo}`}
      style={{ ...miniaturaTarjeta }}
      layout='fullWidth'
    />
  )
}

export default MiniaturaTarjeta
