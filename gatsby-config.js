/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});
/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
	siteMetadata: {
		title: "Simply Recipes",
		description: "Nice and clean recipes site",
		author: "@DocCamarco",
		person: { name: "Doc", age: 19 },
		simpleData: ["item 1", "item 2"],
		complexData: [
			{ name: "Doc", age: 19 },
			{ family: "Camarco", state: "colorado" },
		],
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		{
			resolve: `gatsby-plugin-webfonts`,
			options: {
				fonts: {
					google: [
						{
							family: "Montserrat",
							variants: ["400"],
						},
						{
							family: "Inconsolata",
							variants: ["400", "500", "600", "700"],
						},
					],
				},
			},
		},
	],
};
