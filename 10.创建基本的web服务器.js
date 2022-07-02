//1.导入服务器
const http = require('http')

//2.创建web服务器
const server=http.createServer()

//3.为服务器绑定request时间，监听客户端请求

//req 请求对象
//res 请求结果
server.on('request',function(req,res){
    console.log('Some on visit our web server');
})

//4.启动服务器(默认80)
server.listen(80,function(){
    console.log('server running at http://127.0.0.1');
})