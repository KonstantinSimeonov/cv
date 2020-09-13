import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.base';

import * as constants from './build-constants';

const devConfig = merge(baseConfig, {
	devServer: {
		port: constants.DEV_SERVER_PORT
	},
	devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			DEBUG: true,
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	]
});

export default devConfig;
