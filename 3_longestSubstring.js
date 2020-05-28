/* 3_longestSubstring 无重复字符的最长子串

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。 */


// 遍历每个字符
var lengthOfLongestSubstring = function (s) {
    var i,
        j,
        len = s.length,
        maxLength = 0,
        obj
    for (i = 0; i < len; i++) {
        obj = {}
        for (j = i; j < len; j++) {
            // 字符已存在，更新最大值
            if (obj[s.charAt(j)] !== undefined) {
                maxLength = (j - i) > maxLength ? j - i : maxLength
                break;
            }
            // 将字符作为键值存入obj
            obj[s.charAt(j)] = j
            // 字符串触底（右边）情况
        }
        if (j === len) {
            maxLength = (j - i) > maxLength ? j - i : maxLength
        }
    }
    return maxLength
};

// 数组-动态最短字串
var lengthOfLongestSubstring2 = function (s) {
    var i,
        c,
        index,
        len = s.length,
        maxLength = 0,
        arr = []
    for (i = 0; i < len; i++) {
        c = s.charAt(i)
        // arr中包含c，则记录当前长度，删除arr中c字符之前的元素（包括c）
        if (arr.includes(c)) {
            if (arr.length > maxLength) maxLength = arr.length
            index = arr.indexOf(c)
            arr.splice(0, index + 1)
        }
        arr.push(c)
    }
    if (arr.length > maxLength) maxLength = arr.length
    return maxLength
};
