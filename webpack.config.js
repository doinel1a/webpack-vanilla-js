/* eslint-disable unicorn/prefer-module */
const path = require('node:path');

const html = require('html-webpack-plugin');
const css = require('mini-css-extract-plugin');
const fileManager = require('filemanager-webpack-plugin');

const meta = require('./_config');

module.exports = (environment, argv) => {
	const isProduction = argv.mode === 'production';

	return {
		target: 'browserslist',
		entry: {
			index: getDirectory('src/js/index.js')
		},
		output: {
			path: getDirectory('dist'),
			filename: isProduction ? '[name].[fullhash].js' : '[name].js',
			clean: true
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: '/node_modules/',
					use: {
						loader: 'babel-loader',
						options: {
							cacheDirectory: true
						}
					}
				},
				{
					test: /\.(sass|scss|css)$/i,
					use: [
						{
							loader: css.loader
						},
						'css-loader',
						'sass-loader',
						'postcss-loader'
					]
				},
				{
					test: /\.(png|jpg|jpeg|gif|svg)$/i,
					loader: 'file-loader',
					options: {
						outputPath: 'assets'
					}
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					type: 'asset/resource',
					generator: {
						filename: 'fonts/[name][ext][query]'
					}
				}
			]
		},
		plugins: [
			new html({
				title: meta.title,
				description: meta.description,
				keywords: meta.keywords,
				authorName: meta.author.name,
				authorEmail: meta.author.email,
				authorUrl: meta.author.url,
				gSV: meta.gSV,
				appUrl: meta.appUrl,
				ogImageUrl: meta.ogImageUrl,
				ogImageAlt: meta.ogImageAlt,
				template: getDirectory('src/index.html'),
				partytownSrc: isProduction
					? 'partytown/partytown.js'
					: 'vendor/~partytown/partytown.js',
				minify: {
					collapseWhitespace: true,
					keepClosingSlash: false,
					removeComments: true,
					removeRedundantAttributes: true,
					removeScriptTypeAttributes: true,
					removeStyleLinkTypeAttributes: true,
					useShortDoctype: true
				}
			}),
			new css({
				filename: isProduction ? '[name].[fullhash].css' : '[name].css'
			}),
			new fileManager({
				events: {
					onEnd: [
						{
							copy: [
								{
									source: getDirectory('public/**/**'),
									destination: 'dist'
								}
							]
						},
						{
							copy: [
								{
									source: getDirectory(
										'src/vendor/~partytown/*'
									),
									destination: 'dist/partytown'
								}
							]
						}
					]
				}
			})
		],
		optimization: {
			minimize: isProduction
		},
		devServer: {
			static: {
				directory: isProduction
					? getDirectory('dist')
					: getDirectory('src')
			},
			hot: true,
			server: 'https',
			historyApiFallback: true
		},
		devtool: isProduction ? false : 'source-map'
	};
};

function getDirectory(directory) {
	return path.resolve(__dirname, directory);
}
