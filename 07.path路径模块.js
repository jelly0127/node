const  fs  = require('fs');
const path=require('path')


//../会抵消前面的一层路径
// const pathStr =path.join('/a','/b/c','../','./d','e')
// console.log(pathStr);//\a\b\d\e

//凡是涉及到路径拼接的操作，都要使用path（）方法进行处理。不直接使用 + 进行字符串的拼接。

fs.readFile(path.join(__dirname,'/File/1.txt'),'utf8',function (err,dataStr) {
    if(err){
      return console.log('读取失败',err.message);

    }else{
        
        console.log('读取成功',dataStr)
    }
  
})