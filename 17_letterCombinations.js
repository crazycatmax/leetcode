/* 17_letterCombinations 电话号码的字母组合

给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
给出数字到字母的映射如下（与电话按键相同）。
注意 1 不对应任何字母。



示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
说明:
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 */



// dfs 暴力回溯
var letterCombinations = function (digits) {
    var res = [],
        len = 0,
        hash = [, , 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    if (digits.length < 1) return res

    function dfs(inputs, str, index, len, res) {
        if (index === len) {
            res.push(str)
            return
        }
        for (var c of hash[Number(inputs[index])].split('')) {
            str += c
            dfs(inputs, str, index + 1, len, res)
            str = str.slice(0, str.length - 1)
        }
    }
    dfs(digits, '', 0, digits.length, res)
    return res
};

// 动态规划
var letterCombinations = function (digits) {
    var i,
        j,
        l = digits.length,
        res = [], //当前状态集合
        temp = [], //变化后的状态集合
        str = '',
        hash = [, , 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    if (l < 1) return []
    temp = Array.from(hash[Number(digits[0])])
    res = [...temp]
    for (i = 1; i < l; i++) {
        temp.length = 0
        for (j = 0; j < res.length; j++) {
            str = hash[Number(digits[i])]
            for (k = 0; k < str.length; k++) {
                temp.push(res[j] + str[k])
            }
        }
        res = [...temp]
    }
    return res
};