const path = require("path");//node系统模块，__dirname也是
const jquery = require("jquery");
const rulesConfig = require('./webpack.rule.js');
const pluginsConfig = require('./webpack.plugins.js');

const devJson = require('./webpack.dev.json');
module.exports = {
	//入口文件
	entry:{
		index:"./src/index.js",
		vender:["jquery","./src/index2.js"] //将两个不同的js打包到一个js文件
		//可以随便定义
	},
	//出口文件
	output:{
		path:path.resolve(__dirname,"../dist"), //要绝对路径
		filename:"[name].bundle.js" //定死的名字
	},
	//服务器设置
	devServer:{
		open:true,
		host:devJson.host,
		port:devJson.port,
		contentBase:path.resolve(__dirname,"../dist"),
		hot:true
	},
	module:rulesConfig,
	
	plugins:pluginsConfig
}