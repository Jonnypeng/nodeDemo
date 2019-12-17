/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
      return "";
  }
  let _strs = strs.sort((a, b) => b.length - a.length);
  let minStr = _strs[0];
  function mkRegexp(str) {
      let _str = str;
      let seek = "";
      let _arr = [];
      for (let i = 0; i < _str.length; i++) {
          seek += _str[i];
          _arr.push(seek);
      }
      _arr.sort((a, b) => b.length - a.length);
      _arr = _arr.map(v=>`(^${v})`);
      seek = _arr.join("|");
      seek = new RegExp(seek);
     // console.log(seek) 
      return seek;
  }
  let regexp = mkRegexp(minStr);
  let testStrs = _strs.map(v => v.match(regexp));
  let checkoutNull = () => {
     return testStrs.some(v => v === null);
  }
  if (checkoutNull()) {
      return "";
  } else {
      testStrs.sort((a, b) => a[0].length - b[0].length);
      //console.log(testStrs);
      return testStrs[0][0];
  }
};

//var arr = ["dog","racecar","car"];
//var arr = ["do", "xdog", "doghj"]
//var arr = [""];
//var arr = ["abca","aba","aaab"];
var arr = ["aca","cba"];
console.log(longestCommonPrefix(arr));