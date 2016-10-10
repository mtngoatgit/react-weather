module.exports = {
	entry: {
		main: "./src/App.js"
	},
	output: {
		filename: "bundle.js",
		path: "./public"
	},
	devtool: "sourcemap",
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel"
			},
			{
				test: /\.scss$/,
        loaders: ["style", "css", "sass"],
        exclude: /node_modules/
			}
		]
	}

}
