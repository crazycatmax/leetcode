/* 409. 最长回文串

给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

注意:
假设字符串的长度不会超过 1010。

示例 1:
输入:
"abccccdd"
输出:
7

解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。 */



// 哈希表
var longestPalindrome = function (s) {
    var i,
        hash = {},
        len = 0,
        hasOdd = false
    for (i = 0; i < s.length; i++) {
        if (hash[s[i]]) {
            hash[s[i]]++
        } else {
            hash[s[i]] = 1
        }
    }
    for (i in hash) {
        if (hash[i] % 2 === 0) { //字母个数为偶数
            len += hash[i]
        } else {  //字母个数为奇数
            hasOdd = true
            len += hash[i] - 1
        }
    }
    return hasOdd ? len + 1 : len
}

// 数组
var longestPalindrome2 = function (s) {
    var i,
        arr = [],
        len = 0
    trans = c => c.codePointAt(0),
        hasOdd = false
    for (i = 0; i < s.length; i++) {
        if (arr[trans(s[i])]) {
            arr[trans(s[i])]++
        } else {
            arr[trans(s[i])] = 1
        }
    }
    for (i in arr) {
        if (arr[i] % 2 === 0) { //字母个数为偶数
            len += arr[i]
        } else {  //字母个数为奇数
            hasOdd = true
            len += arr[i] - 1
        }
    }
    return hasOdd ? len + 1 : len
}