
const fs=require('fs')
//（路径，编码格式，callback）
fs.readFile('./File/1.txt','utf8',function (err,dataStr) {
    console.log(err);
    console.log('---------');
    console.log(dataStr)
})