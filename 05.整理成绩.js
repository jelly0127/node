const fs=require('fs')
fs.readFile('./File/成绩.txt','utf8',function (err,data) {
    if(err){
     return   console.log('读取失败！',err);
    }
    const arr=data
    fs.writeFile('./File/成绩_ok.txt',arr,function (err) {
        if (err) {
          return  console.log('写入错误',err.message);
        }
        console.log('写入成功');
    })
})
