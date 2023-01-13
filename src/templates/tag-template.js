import React from "react";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";

const TagTemplate = ({ data, pageContext }) => {
	const recipes = data.allContentfulRecipe.nodes;

	return (
		<Layout>
			<main>
				<h2>{pageContext.tag}</h2>
				<div className='tag-recipes'>
					<RecipesList recipes={recipes} />
				</div>
			</main>
		</Layout>
	);
};

export const query = graphql`
	query GetRecipeByTag($tag: String) {
		allContentfulRecipe(
			sort: { title: ASC }
			filter: { content: { tags: { eq: $tag } } }
		) {
			nodes {
				title
				id
				prepTime
				cookTime
				image {
					gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
				}
			}
		}
	}
`;

export const Head = ({ pageContext }) => {
	const tag = pageContext.tag;
	return <SEO title={tag} />;
};

export default TagTemplate;
