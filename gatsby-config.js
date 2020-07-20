require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: "Shanc",
    description: "Starter for Reflex.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Alegreya`,
          `serif`, // you can also specify font weights and styles
          `noto sans sc`,
        ],
        display: "swap",
      },
    },
  ],
};
