const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		path.join(__dirname, '../../app/web/index')
	],
	output: {
		path: path.join(__dirname, '../public/builds'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			// take all less files, compile them, and bundle them in with our js bundle
			{
				test: /\.less$/,
				loader:
					'style-loader!css-loader!autoprefixer-loader?browsers=last 2 version!less-loader'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, '../../app/web'),
					path.resolve(__dirname, '../../node_modules/react-native-storage')	
				],
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,					
					presets: ['es2015', 'react', 'stage-0'],
					plugins: [
						[
							'react-transform',
							{
								transforms: [
									{
										transform: 'react-transform-hmr',
										imports: ['react'],
										// this is important for Webpack HMR:
										locals: ['module']
									}
								]
							}
						],
						'transform-runtime'
					]
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				PLATFORM_ENV: JSON.stringify('web')
			}
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
};
