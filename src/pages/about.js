import * as React from 'react';
import { Link, graphql } from "gatsby";
//import { Seo } from "../components/seo.js";
import  Layout  from "../components/layout.js";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const query= graphql`
query Cocktailquery{
  file( name: { eq: "blurry_face" }) {
    childImageSharp {
      gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
     }
    }
   `;


export default function AboutPage({ data} )
{
	return(
		< Layout
		title="about"
		description="info for the page" > 
		<h1> I am ceyxasm </h1>
		<h3> Just a tech. </h3>
		<h3> But people who know me better, know me better as Abu Shahid </h3>
		<GatsbyImage
		  image={getImage(data.file)}
		  alt="it is me but blurred"
		/>
		<p> Currently, I am pursuing my Bachelors in Computer Science and Engineering @IIT Jodhpur, with sharp interesnt in AI and Physics, CyberSecurity and Arts.
</p>
<p>		As a kid, I wanted to do everything except engineering. And due to not really terrible developments, 
			 I am here. So this is my story which began infront of a computer in Lucknow and is at present, cruising everywhere on the internet.  </p>
		<h3> See you on the other side. :) </h3>
				< Link to="https://ceyxasm.github.io/ceyxasm/" className="Button1" target="_blank" >My Portfolio </Link>
				< Link to="/" className="Button1"  >Home </Link>
		<h2> About this site </h2>
		<p> This site is built using GatsbyJS, a React based framework. A page like the one you are currently on is written inside a custom React component but most of the posts are actually rendered from .mdx (sick aint it ) </p>
		</Layout>
	);
}
