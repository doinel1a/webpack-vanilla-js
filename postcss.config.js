module.exports = {
	plugins: [
		process.env.NODE_ENV === 'production' ? { cssnano: {} } : null,
		require('postcss-preset-env'),
		require('tailwindcss'),
	],
};
