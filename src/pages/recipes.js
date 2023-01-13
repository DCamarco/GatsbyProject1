import React from "react";
import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";
import { SEO } from "../components/SEO";

const Recipies = () => {
	return (
		<Layout>
			<main className='page'>
				<AllRecipes />
			</main>
		</Layout>
	);
};

export const Head = () => (
	<SEO title='Recipes Page' description='Our total selecition of recipes' />
);

export default Recipies;
