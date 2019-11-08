module.exports = {
  siteMetadata: {
    title: `Atlantic Giants`,
    description: `Uma associação sem fins lucrativos, com vontade de inspirar toda uma comunidade, local e global a preservar os Oceanos e Natureza.`,
    author: `@mercedes-benz.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons',
          'roboto:300,400,500,700',
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/data/images/atlantic-giants-logo.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

// {
//   resolve: "gatsby-source-filesystem",
//   options: {
//     path: "./data/",
//   },
// },
