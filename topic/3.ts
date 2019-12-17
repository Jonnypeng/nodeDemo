var num = 9123123456789.9;
var numFloot = num.toString().match(/\.\d+/)[0];
var intNum:number = Math.floor(num);
var intNumStr:string = intNum.toString();
var reverseStr:string = intNumStr.split("").reverse().join("");
reverseStr = reverseStr.match(/\d{3}/g).map(v=>v+",").join("");
if(intNumStr.length%3!==0){
    reverseStr+=intNumStr[0];
}
var newStr:string|number = reverseStr.split("").reverse().join("") + numFloot;
newStr = newStr.replace(/^,/,"");
console.log(newStr);