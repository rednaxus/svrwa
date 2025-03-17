/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 **/ 

export const siteTitle = 'SFBay Area Tree Stewards'
export const siteDescription = 'tree service and fire compliance'
export const siteURL = 'treestewards.net'
export const siteLink = 'https://github.com/rednaxus/treestewards'
export const siteAuthor = 'SATS, Inc.'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
{
		title: 'Gallery',
		route: '/about'
	}, {
		title: 'Projects',
		route: '/projects' 
	},	{
		title: 'Blog',
		route: '/blog'
	}, {
		title: 'Contact',
		route: '/contact' 
	} 
]