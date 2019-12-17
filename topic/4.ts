/**
 *解析url：var str = 'http://s.weibo.com/weibo/Aralic?topnav=1&wvr=6'获得参数名和参数值： 
 */

class Param{
    key:string;
    value:string;
    constructor(key:string,value:string){
        this.key = key;
        this.value = value;
    }
}

var result:Param[] = [];

var main = function (str:string){
    let search = str.match(/\?.+/)[0];
    search = search.replace(/\?/,"");
    let searchs:any = search.split("&");
    searchs.forEach(v=>{
         let _arr = v.split("=");
         result.push(new Param(_arr[0],_arr[1]));
    })
    return result;
}

var str = 'http://s.weibo.com/weibo/Aralic?topnav=1&wvr=6&name=jonny&age=34&id=3';

console.log(main(str));




