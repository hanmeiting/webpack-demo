const path = require("path");//node系统模块，__dirname也是

module.exports = {
	//入口文件
	entry:{
		entry_name:"./src/index.js" //可以随便定义
	},
	//出口文件
	output:{
		path:path.resolve(__dirname,"dist"), //要绝对路径
		filename:"bundle.js" //定死的名字
	}
}