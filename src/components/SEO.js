import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const SEO = ({ title, description, pathname, children }) => {
	const {
		title: defaultTitle,
		description: defaultDescription,
		author,
		complexData,
	} = useSiteMetadata();
	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
	};

	return (
		<>
			<title>{`${title} | ${defaultTitle}`}</title>;
			<meta name='description' content={seo.description} />;
			<meta name='author' content={author} />
			{children}
		</>
	);
};
