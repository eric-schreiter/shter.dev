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
        background_color: `hsl(0,0%,97%)`,
        theme_color: `hsl(0,0%,15%)`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
        include_favicon: true,
      },
    },
    'gatsby-plugin-offline',
    
  ]
}