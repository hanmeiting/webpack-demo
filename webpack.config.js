const path = require("path");//node系统模块，__dirname也是
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	//入口文件
	entry:{
		index:"./src/index.js",
		index2:"./src/index2.js"
		//可以随便定义
	},
	//出口文件
	output:{
		path:path.resolve(__dirname,"dist"), //要绝对路径
		filename:"[name].bundle.js" //定死的名字
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:"I Love_China",
			template:"./src/index.html",
			hash:"true",
			minify:{
				collapseWhitespace:true,
				removeAttributeQuotes:true
			}

		})
	]
}