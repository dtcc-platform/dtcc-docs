// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'DTCC Platform',
    tagline: 'An open-source platform for Digital Twin Cities',
    url: 'https://dtcc.chalmers.se',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/dtcc-favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
	defaultLocale: 'en',
	locales: ['en'],
    },

    presets: [
	[
	    'classic',
	    /** @type {import('@docusaurus/preset-classic').Options} */
	    ({
		docs: {

		    sidebarPath: require.resolve('./sidebars.js'),
		    // Please change this to your repo.
		    // Remove this to remove the "edit this page" links.
		    editUrl:
		    'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
		},
		blog: {
		    showReadingTime: true,
		    // Please change this to your repo.
		    // Remove this to remove the "edit this page" links.
		    editUrl:
		    'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
		},
		theme: {
		    customCss: require.resolve('./src/css/custom.css'),
		},
	    }),
	],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
	navbar: {
            title: 'DTCC Platform',
            logo: {
		alt: 'DTCC',
		src: 'img/dtcc-logo.png',
            },
            items: [
		{
		    type: 'doc',
		    docId: 'introduction',
		    position: 'left',
		    label: 'Documentation',
		},
		/*
		{to: '/blog', label: 'Blog', position: 'left'},
		{
		href: 'https://gitlab.com/dtcc-platform',
		label: 'GitLab',
		position: 'right',
		},
		*/
            ],
	},
	footer: {
            style: 'dark',
            links: [
		{
		    title: 'Docs',
		    items: [
			{
			    label: 'Documentation',
			    to: '/docs/introduction',
			},
		    ],
		},
		{
		    title: 'Community',
		    items: [
			{
			    label: 'GitLab',
			    href: 'https://gitlab.com/dtcc-platform',
			},
		    ],
		},
		{
		    title: 'More',
		    items: [
			{
			    label: 'Digital Twin Cities Centre',
			    href: 'https://dtcc.chalmers.se',
			},
			{
			    label: 'DTCC Viewer',
			    href: 'https://viewer.dtcc.chalmers.se',
			},
		    ],
		},
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Digital Twin Cities Centre`,
	},
	prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
	},
    }),
};

module.exports = config;
