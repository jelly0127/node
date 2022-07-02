//如果使用相对路径（./）会出现路径拼接错误问
//处理方法：提供一个完整的文件存放路径

const fs=require('fs')
// //（路径，编码格式，callback）
// fs.readFile('./File/1.txt','utf8',function (err,dataStr) {
//     if(err){
//       return console.log('读取失败',err.message);

//     }else{
        
//         console.log('读取成功',dataStr)
//     }
  
// })



//移植性差，不利于维护
// fs.readFile('C:\Users\Jelly\Desktop\node\File\1.tex')
// fs.readFile('C:\\Users\\Jelly\\Desktop\\node\\File\\1.txt','utf8',function (err,dataStr) {
//     if(err){
//       return console.log('读取失败',err.message);

//     }else{
        
//         console.log('读取成功',dataStr)
//     }
  
// })
//


//__dirname表示当前文件所处的目录
fs.readFile(__dirname+'/File/1.txt','utf8',function (err,dataStr) {
    if(err){
      return console.log('读取失败',err.message);

    }else{
        
        console.log('读取成功',dataStr)
    }
  
})