import * as React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
//import { Link } from "gatsby";
//import {Seo} from '../components/seo.js';
import  Layout from "../components/layout.js";
import { imageWrapper } from '../styles/index.module.css';


export default function IndexPage() 
{

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
		
		<Layout> 
		  <div className={imageWrapper}>
		     <StaticImage
			src="../images/index_img.jpg"
			alt="profile picture"
			placeholder="dominantColor"
			width={300}
			height={300}
		  	/>
		  </div>
		 <h1> Hello... Welcome to ceyblogs </h1>
       		 <h2> I am still wondering what will go here.  Why do not you come here later?? </h2>
		 <Link to="/about" className="Button1">About</Link>
		 <Link to="https://ceyxasm.github.io/ceyxasm/" className="Button1" target="_new" >My Portfolio</Link>
		<h2> Check out my recent blogs</h2>
		<ul>
		  {posts.map((post) => (
			  <li key= {post.id}>
			    <Link to={post.frontmatter.slug} className="Link1" >{post.frontmatter.title} </Link>{' '}
			    <small>posted {post.frontmatter.date}</small>
			  </li>
	          ))}
		</ul>
		</Layout>
	);
}

