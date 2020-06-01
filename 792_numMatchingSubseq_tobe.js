/* 792_numMatchingSubseq_tobe 匹配子序列的单词数

给定字符串 S 和单词字典 words, 求 words[i] 中是 S 的子序列的单词个数。

示例:
输入: 
S = "abcde"
words = ["a", "bb", "acd", "ace"]
输出: 3
解释: 有三个是 S 的子序列的单词: "a", "acd", "ace"。

注意:
所有在words和 S 里的单词都只由小写字母组成。
S 的长度在 [1, 50000]。
words 的长度在 [1, 5000]。
words[i]的长度在[1, 50]。 */



// 暴力循环
var numMatchingSubseq = function (S, words) {
    var isSubsequence = function (s, t) {
        var i = 0,
            j = 0
        if (s.length < 1) return true
        while (j < t.length) {
            if (s[i] === t[j]) i++
            j++
            if (i === s.length && j <= t.length) return true
        }
        return false
    }
    return words.filter(t => isSubsequence(t, S)).length
};