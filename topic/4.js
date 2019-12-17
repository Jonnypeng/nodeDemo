/**
 *解析url：var str = 'http://s.weibo.com/weibo/Aralic?topnav=1&wvr=6'获得参数名和参数值：
 */
class Param {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
var result = [];
var main = function (str) {
    let search = str.match(/\?.+/)[0];
    search = search.replace(/\?/, "");
    let searchs = search.split("&");
    searchs.forEach(v => {
        let _arr = v.split("=");
        result.push(new Param(_arr[0], _arr[1]));
    });
    return result;
};
var str = 'http://s.weibo.com/weibo/Aralic?topnav=1&wvr=6&name=jonny&age=34&id=3';
console.log(main(str));
