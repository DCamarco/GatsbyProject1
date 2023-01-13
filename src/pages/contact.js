import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import { SEO } from "../components/SEO";

const Contact = ({ data }) => {
	const recipes = data.allContentfulRecipe.nodes;
	return (
		<Layout>
			<main className='page'>
				<section className='contact-page'>
					<article className='contact-info'>
						<h3>Want to get in touch?</h3>
						<p>
							Four dollar toast biodiesel plaid salvia actually pickled banjo
							bespoke mlkshk intelligentsia edison bulb synth.
						</p>
						<p>Cardigan prism bicycle rights put a bird on it deep v.</p>
						<p>
							Hashtag swag health goth air plant, raclette listicle fingerstache
							cold-pressed fanny pack bicycle rights cardigan poke.
						</p>
					</article>
					<article>
						<form
							className='form contact-form'
							action='https://formspree.io/f/xnqyqede'
							method='POST'
						>
							<div className='form-row'>
								<label htmlFor='name'>Your Name</label>
								<input type='text' name='name' id='name' />
							</div>
							<div className='form-row'>
								<label htmlFor='email'>Your Email</label>
								<input type='text' name='email' id='email' />
							</div>
							<div className='form-row'>
								<label htmlFor='message'>Your message</label>
								<textarea name='message' id='message'></textarea>
								<button type='submit' className='btn block'>
									Submit
								</button>
							</div>
						</form>
					</article>
				</section>
				<section className='featured-recipes'>
					<h5>Look at this Awesomesource!</h5>
					<RecipesList recipes={recipes} />
				</section>
			</main>
		</Layout>
	);
};
export const query = graphql`
	{
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

export const Head = () => (
	<SEO title='Contact Us' description='Fill out our form below' />
);

export default Contact;
