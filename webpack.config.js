var HTMLWebpackPlugin = require("html-webpack-plugin");
var config = {
	template: __dirname + "/app/index.html",
	filename: "index.html",
	inject: "body"
}

module.exports = {
	entry: [
		__dirname + "/app/index.js"
	],

	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{test: /\.css$/, loader: "style-loader!css-loader"}
		]
	},

	output: {
		filename: "script.js",
		path: __dirname + "/pub"
	},

	plugins: [
		new HTMLWebpackPlugin(config)
	]
}