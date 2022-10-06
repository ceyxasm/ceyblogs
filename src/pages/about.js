import * as React from 'react';
import { Link, graphql } from "gatsby";
//import { Seo } from "../components/seo.js";
import  Layout  from "../components/layout.js";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const query= graphql`
query Cocktailquery{
  file( name: { eq: "cocktail" }) {
    childImageSharp {
      gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
     }
    }
   `;


export default function AboutPage({ data} )
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
		<GatsbyImage
		  image={getImage(data.file)}
		  alt="cocktail hai bhjai"
		/>
			<h3> okay about page me layout integrated</h3>
			< Link to="/" >Home </Link>
		</Layout>
	);
}
