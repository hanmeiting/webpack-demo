const path = require("path");//node系统模块，__dirname也是
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
	//服务器设置
	devServer:{
		open:true,
		host:"localhost",
		port:8081,
		contentBase:path.resolve(__dirname,"dist"),
		hot:true
	},
	module:{
		rules:[{
			test:/\.css$/,
			use:ExtractTextPlugin.extract({
				fallback:"style-loader",
				use:"css-loader",
				publicPath:"../" //解决css背景图路径
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
		},{
			test:/\.less$/,
			use:['style-loader','css-loader','less-loader']
		}]
	},
	
	plugins:[
		new CleanWebpackPlugin(), //不用像以前传入文件名了，官方默认删除的就是dist文件夹
		new HtmlWebpackPlugin({
			filename:"index.html",
			title:"I Love_China",
			template:"./src/index.html",
			chunks:["index"],
			hash:"true",
			minify:{
				collapseWhitespace:true,
				removeAttributeQuotes:true
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin("css/index.css")
	]
}