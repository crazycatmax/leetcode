/* 383. 赎金信

给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，
判断第一个字符串ransom能不能由第二个字符串magazines里面的字符构成。
如果可以构成，返回 true ；否则返回 false。
(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。)

注意：
你可以假设两个字符串均只含有小写字母。

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true */



// 暴力法
var canConstruct = function (ransomNote, magazine) {
    var i,
        hash = {}
    for (i = 0; i < magazine.length; i++) {
        if (hash[magazine[i]]) {
            hash[magazine[i]]++
        } else[
            hash[magazine[i]] = 1
        ]
    }
    for (i = 0; i < ransomNote.length; i++) {
        if (!hash[ransomNote[i]] || hash[ransomNote[i]] < 1)
            return false
        hash[ransomNote[i]]--
    }
    return true
}

// 
var canConstruct2 = function (ransomNote, magazine) {
    var i,
        hash = Array.from({ length: 26 }),
        trans = c => c.codePointAt(0)
    hash.fill(0)
    for (i = 0; i < magazine.length; i++) {
        hash[trans(magazine[i]) - trans('a')]++
    }
    for (i = 0; i < ransomNote.length; i++) {
        hash[trans(ransomNote[i]) - trans('a')]--
        if (hash[trans(ransomNote[i]) - trans('a')] < 0)
            return false
    }
    return true
}