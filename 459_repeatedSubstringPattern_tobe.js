/* 459_repeatedSubstringPattern. 重复的子字符串

给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。

示例 1:
输入: "abab"
输出: True
解释: 可由子字符串 "ab" 重复两次构成。

示例 2:
输入: "aba"
输出: False

示例 3:
输入: "abcabcabcabc"
输出: True

解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。) */



// 
var repeatedSubstringPattern = function (s) {
    var i,
        j,
        findIndex
    for (i = 0; i < Math.floor(s.length / 2); i++) {
        tmpl = s.slice(0, i + 1) //模板字符串
        j = 0 //查找的起始位置
        while (j < s.length) {
            findIndex = s.indexOf(tmpl, j)
            if (findIndex === j) { //查找到，且位置是起始位置j，则跳到匹配字符串末尾的下一位
                j += i + 1
            } else { //查找不到，或者查找到的位置不是起始位置j，则跳出
                break
            }
        }
        if (j === s.length) return true
    }
    return false
};