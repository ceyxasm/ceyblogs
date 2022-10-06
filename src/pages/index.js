import * as React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
//import { Link } from "gatsby";
//import {Seo} from '../components/seo.js';
import  Layout from "../components/layout.js";
import { imageWrapper } from '../styles/index.module.css';


export default function IndexPage() 
{
/*	const data = useStaticQuery(graphql`
	query getTitle{
	   site{
	      siteMetadata{
		title
	      }
	   }
	}
		`);

	const meta = data?.site?.siteMetadata ?? {};
*/


	const data= useStaticQuery(graphql`
	query GetBlogs{
	  allMdx{
	    nodes{
	      id
	      frontmatter{
	        title
		slug
		description
		date(fromNow: true)
		}
	      }
	    }
	  }
	 `);

	const posts= data.allMdx.nodes;
	return (
/*		<>
		<Seo />
		<header>
			<Link to="/"> {meta.title} </Link>
		</header>

		<main>
		<h1> hello this is my page of blog. </h1>
		<h2>hoping render is real-time : test2</h2>
		<Link to="/about">About page </Link>
		</main>
		</>
*/
		
		<Layout> 
		  <div className={imageWrapper}>
		     <StaticImage
			src="../images/cocktail.jpg"
			alt="cocktail! enjoy."
			placeholder="dominantColor"
			width={300}
			height={300}
		  	/>
		  </div>
		 <h1> Okay layouting is done </h1>
       		 <h2> testing paging?? </h2>
		 <Link to="/about">about page</Link>

		<h2> Check out my recent blogs</h2>
		<ul>
		  {posts.map((post) => (
			  <li key= {post.id}>
			    <Link to={post.frontmatter.slug}>{post.frontmatter.title} </Link>{' '}
			    <small>posted {post.frontmatter.date}</small>
			  </li>
	          ))}
		</ul>
		</Layout>
	);
}

