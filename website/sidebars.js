/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

	// By default, Docusaurus generates a sidebar from the docs folder structure
	//tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

	// But you can create a sidebar manually
	tutorialSidebar: [
		'introduction',
		{
			type: 'category',
			label: 'DTCC Builder',
			link: {
				type: 'generated-index',
			},
			collapsed: false,
			items: [
				'dtcc-builder/introduction',
				'dtcc-builder/installation',
				'dtcc-builder/usage',
				'dtcc-builder/development',
			],
		},
		{
			type: 'category',
			label: 'DTCC Docs',
			link: {
				type: 'generated-index',
			},
			collapsed: false,
			items: [
				'dtcc-docs/introduction',
				'dtcc-docs/installation',
				'dtcc-docs/usage',
				'dtcc-docs/development',
			],
		},
		{
			type: 'category',
			label: 'DTCC IO',
			link: {
				type: 'generated-index',
			},
			collapsed: false,
			items: [
				'dtcc-model/introduction',
				'dtcc-model/installation',
				'dtcc-model/usage',
				'dtcc-model/development',
			],
		},
		{
			type: 'category',
			label: 'DTCC Model',
			link: {
				type: 'generated-index',
			},
			collapsed: false,
			items: [
				'dtcc-model/introduction',
				'dtcc-model/installation',
				'dtcc-model/usage',
				'dtcc-model/development',
			],
		},
		{
			type: 'category',
			label: 'DTCC Platform',
			link: {
				type: 'generated-index',
			},
			collapsed: false,
			items: [
				'dtcc-model/introduction',
				'dtcc-model/installation',
				'dtcc-model/usage',
				'dtcc-model/development',
			],
		}
	]

};

module.exports = sidebars;
