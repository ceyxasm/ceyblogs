import * as React from 'react';
import { Link } from 'gatsby';
//changes
//changes
import Layout from './layout.js';

const shortcodes= { Link } //common component go here

export default function PostLayout(
	{
		children,
		pageContext
	}){
	const { title, description }= pageContext.frontmatter;

	return(
		< Layout title={title}
		description={description} >
		{children}
			< Link to="/">&larr; back</Link>
		</Layout>
	);
}
