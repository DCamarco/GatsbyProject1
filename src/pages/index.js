import * as React from "react";
import Layout from "../components/Layout";
import FetchData from "../examples/fetchData";
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
	return (
		<Layout>
			<main className='page'>
				<header className='hero'>
					<StaticImage
						src='../assets/images/main.jpeg'
						alt='eggs'
						className='hero-img'
						placeholder='tracedSVG'
						layout='fullWidth'
					/>
					<div className='hero-container'>
						<div className='hero-text'>
							<h1>Simply Recipies</h1>
							<h3>no fluff, just recipies</h3>
						</div>
					</div>
				</header>
				<FetchData />
			</main>
		</Layout>
	);
}

// export default Home;
