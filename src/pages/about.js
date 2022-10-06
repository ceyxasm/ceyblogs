import * as React from 'react';
import { Link } from "gatsby";
//import { Seo } from "../components/seo.js";
import  Layout  from "../components/layout.js";

export default function AboutPage()
{
	return(
/*		<>
		<Seo
			title="About this site"
			description="more information about the site"
		/>
		<main>
			<h2> this is the about page </h2>
			<Link to="/">Back to main </Link>
		</main>
		</>
		*/
		< Layout
		title="about"
		description="info for the page" > 
			<h3> okay about page me layout integrated</h3>
			< Link to="/" >Home </Link>
		</Layout>
	);
}
