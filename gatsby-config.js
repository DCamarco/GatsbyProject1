/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: "Gatsby Starter",
		description: "Nice and clean recipes site",
		author: "@docCamarco",
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
	],
};
