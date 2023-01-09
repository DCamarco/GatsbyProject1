import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
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
			</main>
		</Layout>
	);
};

export default About;
