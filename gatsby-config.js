module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Curriculum vitae',
    pathPrefix: "/curriculum",
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      },
      __key: 'images'
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrés Felipe Alvarez`,
        short_name: `Andrés Alvarez`,
        description: `Curriculum vitae and portfolio of Andrés Alvarez.`,
        start_url: `/`,
        background_color: `#0d0d0d`,
        theme_color: `#0d0d0d`,
        display: `standalone`,
        cache_busting_mode: 'none',
        icon: 'src/static/images/logoAndres.svg',
        icon_options: {
          purpose: `any`
        }
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/index/*`, `/404/*`],
        workboxConfig: {
          runtimeCaching: [
            {
              urlPattern: /(\.js$|\.css$|\.woff$|\.woff2$|\.svg$)/,
              handler: `StaleWhileRevalidate`
            }
          ]
        }
      }
    }
  ]
}
