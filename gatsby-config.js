require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Heart of the Matter Show with Bryan Davis and Jay Kannaiyan`,
    siteTitleAlt: `Heart of the Matter Show with Bryan Davis and Jay Kannaiyan`,
    siteName: `Heart of the Matter Show with Bryan Davis and Jay Kannaiyan`,
    siteHeadline: `A new podcast with inspiring and interesting guests`,
    siteUrl: `https://heartofthemattershow.com`,
    siteDescription: `Welcome to the Heart of the Matter, a series in which we share conversations with inspiring and interesting people and dive into the core issues or motivations behind their work, their lives, and their worldview. Coming to you from Austin and the Bay Area with your hosts Bryan Davis and Jay Kannaiyan.`,
    siteLanguage: `en`,
    siteImage: `/logo-hom.jpg`, 
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://app.us8.list-manage.com/subscribe/post?u=f530d4e34940ff8b991a06b38&amp;id=2254846f7b',
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        blogPath: `/episodes`,
        formatString: `MM.DD.YYYY`,
        navigation: [
          {
            title: `Episodes`,
            slug: `/episodes`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Contact`,
            slug: `/contact`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/heartmattershow`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/heartmattershow/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Heart of the Matter Show with Bryan Davis and Jay Kannaiyan`,
        short_name: `hom-website`,
        description: `Welcome to the Heart of the Matter, a series in which we share conversations with inspiring and interesting people and dive into the core issues or motivations behind their work, their lives, and their worldview. Coming to you from Austin and the Bay Area with your hosts Bryan Davis and Jay Kannaiyan.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
