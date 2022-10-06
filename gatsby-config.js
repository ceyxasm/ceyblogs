module.exports = {
	siteMetadata: {
		siteUrl: "http://www.domain.com",
		title: "blogs",
		description: "to free my mind",
		image: "something something"
	},
	plugins: [
		'gatsby-plugin-react-helmet',
	{
		resolve: 'gatsby-source-filesystem',
		options:{
			name: 'pages',
			path: `${__dirname}/src/pages`,
		},
	},
	{
		resolve: 'gatsby-source-filesystem',
		options: {
			name: 'posts',
			path: `${__dirname}/src/posts`,
		},
	},
	{
		resolve: 'gatsby-plugin-page-creator',
		options: {
			path: `${__dirname}/src/posts`,
		},
	},
	'gatsby-remark-images',
	{
		resolve: 'gatsby-plugin-mdx',
		options: {
			gatsbyRemarkPlugins: [
				{
					resolve: 'gatsby-remark-images',
					options: {
						maxwidth: 1200,
					},
				},
			],
			defaultLayouts: {
				posts: require.resolve( './src/components/post-layout.js'),
			},
		},
	},
	{
		resolve: 'gatsby-source-filesystem',
		options: {
			name: 'images',
			path: `${__dirname}/src/images/`,
		},
	},
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
	],
};
