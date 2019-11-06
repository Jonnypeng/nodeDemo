var path = require("path");
var fs = require("fs");

var customUrl = {
    absolute: "/Users/jonny/IMPORTANT/html/civaonline_cn/ccGame2/assets/Game16",     //以本文件作为一个入口，
    stitching: "assets/Game16",              //定义工程项目所对应的读取目录的地址，用来拼接字符串
    output:path.join(__dirname,"./output")         //定义一个文件输出目录，用来输出json文件
}

var url = customUrl.absolute;    //将读取目录从相对地址转换为绝对地址
var results = {
    data:[]
}

var fileLength = 0;       // 设置一个初始化的文件数量长度

readDir(url);           //初始化载入数据，下面的代码被封装为函数，目的是为了递归循环，再传入新的参数
function readDir(_url) {
    fs.readdir(_url, function (err, files) {
        console.log(_url);
        fileLength+=files.length;       // 只要载入函数，文件数量的长度就会自增读取的文件长度
        if (err) {
            console.log(err);
            return false;
        }
        files.forEach(function (filename) {             // 循环文件列表
            let isHide = (/^\./).test(filename);        // 判断是否是隐藏文件
            if (!isHide) {
                let fsStats = fs.statSync(`${_url}/${filename}`);       // 用来判断是文件夹或者文件
                if (fsStats.isDirectory()) {     // 如果是文件夹
                    fileLength-=1;         // 如果发现是目录，就会自减1     
                    customUrl.stitching += `/${filename}`;      //重新定义需要拼接的字符串
                    readDir(`${_url}/${filename}`);         // 重新返回函数头部，再重新解析数据
                } else if (fsStats.isFile()) {
                    console.log("this is file");
                    //results.data.push(`${customUrl.stitching}/${filename}`);    // 直接推送到需要写入的json文件内容中
                    results.data.push({
                        url:`${customUrl.stitching}/${filename}`,
                        key:filename.replace(/\.jpg|\.jpeg|\.png/,"")
                    });
                    console.log(results.data.length,fileLength);
                    if(results.data.length===fileLength){    // 如果输入数据长度与文件数据长度相等，则执行写入
                       writeFile();
                    }
                }
            }else{
                fileLength-=1;   // 如果发现是隐藏文件，就会自减1   
            }
        });
    });
}

function writeFile(){
    fs.writeFile(`${customUrl.output}/manifest.json`,JSON.stringify(results),function (err){
        if(err){
            return console.log(err);
        }
        console.log(`文件创建成功`);
    });
}