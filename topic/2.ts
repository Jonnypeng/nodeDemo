/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s: string) {
    let length = 0;

    let isRepeat = function (str:string):boolean{
            let strSet = new Set(str); 
            return strSet.size < str.length ? true : false; 
    }

    let offsetLength = s.length;

    let start = 0;
    let end = 0;
    var slideStr = function (offsetLength: number) {
        if(offsetLength===0){
            return false;
        }else{
            if(end>s.length){
                start = 0;
                offsetLength-=1;
            }
            end = start + offsetLength;
            let testStr:string|any = s.slice(start,end);
            if(!isRepeat(testStr)){
                length = testStr.length;
                return true;
            }else{
                start+=1;
                slideStr(offsetLength);
            }
        }
    }

    slideStr(offsetLength);

    return length;
};

let result = lengthOfLongestSubstring("asjrgapa");

console.log(result);
