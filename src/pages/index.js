import * as React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import {Seo} from '../components/seo.js';

export default function IndexPage() 
{
	const data = useStaticQuery(graphql`
	query getTitle{
	   site{
	      siteMetadata{
		title
	      }
	   }
	}
		`);

	const meta = data?.site?.siteMetadata ?? {};

	return (
		<>
		<Seo />
		<header>
			<Link to="/"> {meta.title} </Link>
		</header>

		<main>
		<h1> hello this is my page of blog. </h1>
		<h2>hoping render is real-time </h2>
		<Link to="/about">About page </Link>
		</main>
		</>
	);
}

