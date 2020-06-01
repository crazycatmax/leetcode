/* 14_longestCommonPrefix 最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。

示例 1:
输入: ["flower","flow","flight"]
输出: "fl"

示例 2:
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。

说明:
所有输入只包含小写字母 a-z 。 */



// 暴力循环
var longestCommonPrefix = function (strs) {
    var i,
        j,
        head = strs[0]
    if (!head) return ''
    for (i = 0; i < head.length; i++) {
        for (j = 1; j < strs.length; j++) {
            if (strs[j][i] !== head[i])
                return head.slice(0, i)
        }
    }
    return head
};

// 字符串-数组方法
var longestCommonPrefix = function (strs) {
    var i,
        j,
        head = strs[0]
    if (!head)
        return ''
    for (i = 0; i < head.length; i++) {
        if (strs.some(t => !t.startsWith(head.slice(0, i + 1))))
            return head.slice(0, i)
    }
    return head
};