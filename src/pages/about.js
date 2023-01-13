import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import { SEO } from "../components/SEO";

const About = ({
	data: {
		allContentfulRecipe: { nodes: recipes },
	},
}) => {
	return (
		<Layout>
			<main className='page'>
				<section className='about-page'>
					<article>
						<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Exercitationem eveniet eum harum alias, ducimus delectus commodi
							molestiae porro aperiam dolorem! Labore culpa, illum
							exercitationem numquam dicta rerum enim corrupti reiciendis.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
							aliquam libero quisquam asperiores reiciendis culpa cupiditate
							molestiae minus, sequi ipsam iure alias delectus molestias
							blanditiis in rerum vitae mollitia officia!
						</p>
						<Link to='/contact' className='btn'>
							contact
						</Link>
					</article>
					<StaticImage
						src='../assets/images/about.jpeg'
						alt='Person Pouring Salt in Bowl'
						className='about-img'
						placeholder='blurred'
					/>
				</section>
				<section className='featured-recipes'>
					<h5>Look at this Awesomesource!</h5>
					<RecipesList recipes={recipes} />
				</section>
			</main>
		</Layout>
	);
};

export const Head = () => (
	<SEO
		title='About'
		description='An about page that lets you know more about us.'
	/>
);

export const query = graphql`
	query {
		allContentfulRecipe(
			sort: { title: ASC }
			filter: { featured: { eq: true } }
		) {
			nodes {
				id
				title
				cookTime
				prepTime
				image {
					gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
				}
			}
		}
	}
`;
export default About;
