
const fs=require('fs')
//（路径，编码格式，callback）
fs.readFile('./File/1.txt','utf8',function (err,dataStr) {
    if(err){
      return console.log('读取失败',err.message);

    }else{
        
        console.log('读取成功',dataStr)
    }
  
})