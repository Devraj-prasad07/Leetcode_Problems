/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let n = s.length;
    let halfLength = Math.floor(n/2);
    for (let i = 0; i < halfLength; i++){
        let temp = s[i];
        s[i] = s[n-1-i];
        s[n-1-i] = temp;
    }
};