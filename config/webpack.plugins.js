const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCssWebpack = require("purifycss-webpack");
const glob = require('glob-all');
const jquery = require("jquery");
const plugins = [
	new CleanWebpackPlugin(), //不用像以前传入文件名了，官方默认删除的就是dist文件夹
	new HtmlWebpackPlugin({
		filename:"index.html",
		title:"I Love_China",
		template:"./src/index.html",
		chunks:["index","jquery"],
		hash:"true",
		minify:{
			collapseWhitespace:true,
			removeAttributeQuotes:true
		}
	}),
	new webpack.HotModuleReplacementPlugin(),
	new ExtractTextPlugin("css/index.css"),
	new PurifyCssWebpack({
		paths:glob.sync(path.join(__dirname,"../src/*.html"))
	}),
	new webpack.ProvidePlugin({
		$:"jquery",
		lodash:'lodash'
	})
]

module.exports = plugins;