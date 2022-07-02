//使用path.name()方法，可以从一个文件路径中，获取到文件的名称部分：
const path=require('path')


//定义文件的存放路径
const fpath='/a/b/c/index.html'

const fullName=path.basename(fpath)
// const fullName=path.basename(fpath,'.html')

console.log(fullName);
console.log(fpath);