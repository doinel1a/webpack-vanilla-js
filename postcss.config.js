/* eslint-disable unicorn/prefer-module */
module.exports = {
	plugins: [
		require('postcss-import'),
		require('tailwindcss/nesting'),
		require('tailwindcss'),
		require('autoprefixer'),
		require('cssnano')
	]
};
