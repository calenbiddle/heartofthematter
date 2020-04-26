require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Heart of the Matter`,
    siteTitleAlt: `Heart of the Matter`,
    siteHeadline: `A new podcast with inspiring and interesting guests`,
    // siteUrl: `https://minimal-blog.lekoarts.de`,
    siteDescription: `Welcome to the Heart of the Matter, a series in which we share conversations with inspiring and interesting people and dive into the core issues or motivations behind their work, their lives, and their worldview. Coming to you from Austin, Texas with your hosts Bryan Davis and Jay Kannaiyan.`,
    siteLanguage: `en`,
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
            url: `https://twitter.com/jamminglobal`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/jamminglobal/`,
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
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
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
