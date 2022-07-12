const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const minicssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
    mode: mode,
    target: 'browserslist',
    entry: {
        index: './src/js/index.js',
    },
    output: {
        path: path.resolve(__dirname, './public/'),
        filename:
            mode === 'development' ? 'js/[name].js' : 'js/[name].[fullhash].js',
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: {
            keep(asset) {
                if (asset.includes('favicon')) return true;
                else if (asset.includes('manifest')) return true;
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: minicssExtractPlugin.loader,
                        // REQUIRED IF WANT TO IMPORT ASSETS AS URL
                        // options: { publicPath: '' },
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.json$/i,
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset',

                // TO INLINE LARGER IMAGES
                // parser: {
                //   dataUrlCondition: {
                //     maxSize: 30 * 1024,
                //   },
                // },
            },
        ],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './public'),
        },
        hot: true,
    },
    plugins: [
        new htmlPlugin({
            template: './src/index.html',
            publicPath: '/',
        }),
        new minicssExtractPlugin({
            filename:
                mode === 'development'
                    ? 'css/style.css'
                    : 'css/style.[contenthash].css',
        }),
    ],
    optimization: {
        minimize: mode === 'development' ? false : true,
        minimizer: [new TerserPlugin()],
    },
    devtool: mode === 'development' ? 'source-map' : false,
};
