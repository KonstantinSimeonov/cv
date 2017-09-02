import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.base';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'

const prodConfig = merge(baseConfig, {
	plugins: [
		new webpack.DefinePlugin({
			DEBUG: false,
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/
		})
	]
});

export default prodConfig;