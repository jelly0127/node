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

const str=`你请求的url地址是： ${url},请求的方法是：${method}`

//设置响应码，解决中文乱码问题
//res.setHeader()方法，设置Conten-Type 响应头，解决中文乱码
res.setHeader('Content-Type','text/html;charset=utf-8')

//调用res.end向客户端反应一下内容
res.end(str)

})

//4.启动服务器(默认80)
server.listen(80,function(){
    console.log('server running at http://127.0.0.1');
})