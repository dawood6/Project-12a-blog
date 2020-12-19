module.exports = {
  plugins: [ 
  "gatsby-plugin-typescript",
  `gatsby-transformer-remark`,
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: "h9zyinj2mebn",
      accessToken: "oWaKlItg3iRKW8p4QVc8m4OkkObXYGyIZU9CL7MbNYg",
    },
  },
],
};
