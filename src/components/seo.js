import * as React from 'react';
import { Helmet} from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

export function Seo(props) {

	const data = useStaticQuery(graphql`
	query GetMetadata{
		site{
		    siteMetadata{
		       title
		       siteUrl
		       image
		       description
		    }
		}
	}`);

	const defaults = data.site.siteMetadata;

	const title= props.title || defaults.title;
	const description= props.description || defaults.descritpion;
	const image= new URL(props.image || defaults.image, defaults.siteUrl);
	const siteUrl= new URL(props.path || '/', defaults.siteUrl);

	return(
		<Helmet>
		  <title>{title}</title>
		  <meta name="description" content={description} />
		  <link rel="canonical" href={siteUrl} />
		  {image && <meta name="image" content={image} />}

		  <meta property="og:url" content={siteUrl} />
		  <meta property="og:type" content="website" />
		  <meta property="og:title" content={title} />
		  <meta property="og:description" content={description} />
		  { image &&   <meta property="og:image" content={image} /> }

		  <meta name="twitter:card" content="summary_large_image" />
		  <meta name="twitter:title" content={title} />
		  <meta name="twitter:description" content={description} />
		  {image && <meta name="twitter:image" content={image} />}
		</Helmet>
	);
}
