import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
	{
		site {
			siteMetadata {
				author
				description
				simpleData
				title
				complexData {
					age
					name
				}
				person {
					age
					name
				}
			}
		}
	}
`;

const FetchData = () => {
	const {
		site: {
			siteMetadata: {
				author,
				description,
				simpleData,
				title,
				complexData,
				person,
			},
		},
	} = useStaticQuery(getData);

	return (
		<div>
			<h2>{title}</h2>
			{simpleData}
		</div>
	);
};

export default FetchData;
