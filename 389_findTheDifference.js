/* 389_findTheDifference 找不同

给定两个字符串 s 和 t，它们只包含小写字母。
字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
请找出在 t 中被添加的字母。

示例:

输入：
s = "abcd"
t = "abcde"

输出：
e

解释：
'e' 是那个被添加的字母。 */



// 借助 ascii码 
var findTheDifference = function (s, t) {
    var i,
        num = 0
    for (i = 0; i < s.length; i++) {
        num -= s.codePointAt(i)
        num += t.codePointAt(i)
    }
    num += t.codePointAt(i)
    return String.fromCharCode(num)
};

// 数组方法
var findTheDifference = function (s, t) {
    var arr1 = s.split('').sort((a, b) => a.codePointAt(0) - b.codePointAt(0))
    var arr2 = t.split('').sort((a, b) => a.codePointAt(0) - b.codePointAt(0))
    return arr2.filter((t, i) => arr1[i] !== t)[0]
};