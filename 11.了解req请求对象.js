//1.导入服务器
const http = require('http')

//2.创建web服务器
const server=http.createServer()

//3.为服务器绑定request时间，监听客户端请求

//req 请求对象
//res 请求结果
server.on('request',(req,res)=>{
// req.url 客户端请求的 URL地址
const url= req.url

//req.method 是客户端请求的method类型
const method=req.method

const str=`Your request url is ${url},and request method is ${method}`

console.log(str);
})

//4.启动服务器(默认80)
server.listen(80,function(){
    console.log('server running at http://127.0.0.1');
})