import path from 'path';
import webpack from 'webpack';

import HTMLWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import * as constants from './build-constants';

const baseConfig = {
	resolve: {
		extensions: ['.styl', '.js', '.png', '.jpg', '.ico', '.gif'],
		alias: {
			'handlebars': path.resolve(__dirname, 'node_modules', 'handlebars', 'dist', 'handlebars.js'),
			'assets': path.resolve(constants.SRC_DIR, 'assets'),
			'styles': path.resolve(constants.SRC_DIR, 'styles')
		}
	},
	entry: {
		app: path.resolve(constants.SRC_DIR, 'app.js')
	},
	output: {
		path: constants.BUILD_DIR,
		filename: '[name].[hash].js'
	},
	module: {
		loaders: [
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader',
				options: {
					helperDirs: [
						path.resolve(constants.SRC_DIR, 'handlebars-helpers')
					]
				}
			},
			{
				use: 'babel-loader',
				test: /\.js$/
			},
			{
				test: /\.styl$/,
				use: ExtractTextPlugin.extract(['css-loader', 'stylus-loader'])
			},
			{
				test: /\.(png|gif|ico|jpe?g)/,
				use: [
					{
						loader: 'image-webpack-loader',
					},
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			stylus: {
				preferPathResolver: 'webpack'
			}
		}),
		new ExtractTextPlugin('[name].[hash].css'),
		new HTMLWebpackPlugin({
			template: constants.HTML_TEMPLATE_PATH,
			filename: 'index.html',
			title: constants.APP_TITLE
		})
	]
};

export default baseConfig;
