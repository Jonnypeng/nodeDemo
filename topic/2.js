/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var length = 0;
    var isRepeat = function (str) {
        var strSet = new Set(str);
        return strSet.size < str.length ? true : false;
    };
    var offsetLength = s.length;
    var start = 0;
    var end = 0;
    var slideStr = function (offsetLength) {
        if (offsetLength === 0) {
            return false;
        }
        else {
            if (end > s.length) {
                start = 0;
                offsetLength -= 1;
            }
            end = start + offsetLength;
            var testStr = s.slice(start, end);
            if (!isRepeat(testStr)) {
                length = testStr.length;
                return true;
            }
            else {
                start += 1;
                slideStr(offsetLength);
            }
        }
    };
    slideStr(offsetLength);
    return length;
};
var result = lengthOfLongestSubstring("abcabcww");
console.log(result);
