
const fs=require('fs')
//（存放路径，内容，编码格式(默认utf8)可不写)，callback）
fs.writeFile('./File/2.txt','abcd',function (err) {
if(err){
    console.log('读入失败',err);

}else{
    console.log('读入成功');

}
})