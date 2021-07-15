import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza place in Hamilton!',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin you're adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '8h1qefk8',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      }
    }
  ]
};