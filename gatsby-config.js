const path = require(`path`)

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eric Schreiter`,
        short_name: `shter.dev`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
        include_favicon: true,
      },
    },
    'gatsby-plugin-offline',
    
  ]
}