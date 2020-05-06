
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const rule = {
	rules:[{
		test:/\.css$/,
		// use:[
		// 	{loader:"style-loader"},
		// 	{loader:"css-loader"},
		// 	{loader:"postcss-loader"}
		// ]
		use:ExtractTextPlugin.extract({
			fallback:"style-loader",
			use:["css-loader","postcss-loader"],
			publicPath:"../" //解决css背景图路径
		})
	},{
		test:/\.less$/,
		// use:[
		// 	{loader:"style-loader"},
		// 	{loader:"css-loader"},
		// 	{loader:"less-loader"}
		// ]
		use:ExtractTextPlugin.extract({
			fallback:"style-loader",
			use:["css-loader","less-loader"]
		})
	},{
		test:/\.(png|jpe?g|gif|svg)$/,
		use:[{
			loader: 'url-loader',
			options:{
				limit:50000, //限制大小，大于50kb字节图片显示路径
				outputPath:"images" //图片打包出去的目录
			}
		}]
	}]
}

module.exports = rule;