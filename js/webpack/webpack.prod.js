import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import baseConfig from './webpack.base';
import * as constants from './build-constants';

const prodConfig = merge(baseConfig, {
	plugins: [
		new CleanWebpackPlugin([constants.BUILD_DIR], { root: path.resolve(__dirname, '..') }),
		new webpack.DefinePlugin({
			DEBUG: false,
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/
		}),
		new CopyWebpackPlugin([
			{ from: path.join(constants.REPOSITORY_ROOT, 'src', 'server.js'), to: constants.BUILD_DIR },
			{ from: path.join(constants.REPOSITORY_ROOT, 'Procfile'), to: constants.BUILD_DIR },
			{ from: path.join(constants.REPOSITORY_ROOT, 'src', 'package.json'), to: constants.BUILD_DIR }
		]),
	]
});

export default prodConfig;
