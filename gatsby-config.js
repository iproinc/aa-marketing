module.exports = {
  siteMetadata: {
    title: `Adtrics`,
    description: `Eliminate The Guesswork And Be Data-Informed For All Your ROI-Optimizing Decisions`,
    author: `iProGroup`,
    siteUrl: `https://adtrics.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adtrics`,
        short_name: `Adtrics`,
        start_url: `/`,
        background_color: `#4E69A2`,
        display: `minimal-ui`,
        icon: `src/images/adtrics-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KF9J8D9",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-client-side-redirect`
  ],
}
