import React from "react";
import Gallery from "../examples/Gallery";
import Layout from "../components/layout";

const Testing = ({ data }) => {
	return (
		<Layout>
			<main className='page'>
				<Gallery />
			</main>
		</Layout>
	);
};

export default Testing;
