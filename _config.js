// eslint-disable-next-line unicorn/prefer-module
module.exports = {
	title: whiteSpace('VanillaJS — Starter'),
	description: whiteSpace(
		'Start a Vanilla JavaScript App, SPA, landing page or website using Webpack, Babel, Core-JS, SASS / SCSS, Tailwind CSS and much more, in just 30 seconds.'
	),
	keywords: whiteSpace(
		'javascript, js, vanilla-javascript, vanilla-js, template, boilerplate, webpack, babel, tailwind, tailwindcss, sass, scss, css, github'
	),
	author: {
		name: whiteSpace('Doinel Atanasiu'),
		email: 'mailto:doinel1atanasiu@gmail.com',
		url: 'https://business-link.d1a.app'
	},
	gSV: '43hCqye5FYTS4SnBMPKNFP-wBhfLHwRBykWJF1WJawo',
	appUrl: 'https://vanilla-js-starter.d1a.app',
	ogImageUrl: 'https://vanilla-js-starter.d1a.app',
	ogImageAlt: whiteSpace(
		'Description of what is in the image (not a caption)'
	)
};

function whiteSpace(text) {
	return text.replaceAll(' ', '&nbsp;');
}
