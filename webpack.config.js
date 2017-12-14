module.exports = {
    entry: './index.js',
    output: {
        filename: './bundle.js'
        },
     module: {
        loaders: [
	        {
	            test: /\.js?$/,
	            loader: 'babel-loader',
	            exclude: /node_modules/,
	            query: {
	                presets: ['es2015', 'react']
	            }
	        },
	        {
	            test: /\.css?$/,
	            loaders: ['style-loader', 'css-loader']
	        }
	    ]
    }
}
