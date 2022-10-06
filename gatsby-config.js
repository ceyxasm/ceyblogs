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
		options: {
			name: 'posts',
			path: `${__dirname}/src/posts/`,
		},
	},
	{
		resolve: 'gatsby-plugin-page-creator',
		options: {
			path: `${__dirname}/src/posts/`,
		},
	},
	{
		resolve: 'gatsby-plugin-mdx',
		options: {
			defaultLayouts: {
				posts: require.resolve( './src/components/layout.js'),
			},
		},
	},
	],
};
