import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import AllRecipes from "../components/AllRecipes";
import { SEO } from "../components/SEO";

export default function Home() {
	return (
		<Layout>
			<main className='page'>
				<header className='hero'>
					<StaticImage
						src='../assets/images/main.jpeg'
						alt='eggs'
						className='hero-img'
						placeholder='blurred'
						layout='fullWidth'
					/>
					<div className='hero-container'>
						<div className='hero-text'>
							<h1>Simply Recipies</h1>
							<h3>no fluff, just recipies</h3>
						</div>
					</div>
				</header>
			</main>
			<AllRecipes />
		</Layout>
	);
}
export const Head = () => <SEO title='Home Page' />;
