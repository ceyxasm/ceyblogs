module.exports = {
	siteMetadata: {
		siteUrl: "https://ceyblogs.netlify.app/",
		title: "ceyblogs",
		description: "this is my personal blog site :)",
		image: "/images/ceyblogs.png",
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
