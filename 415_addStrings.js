/* 415_addStrings 字符串相加

给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

注意：
num1 和num2 的长度都小于 5100.
num1 和num2 都只包含数字 0-9.
num1 和num2 都不包含任何前导零。
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。 */



// 按位处理，转换字符为数字
var addStrings = function (num1, num2) {
    var i = num1.length - 1,
        j = num2.length - 1,
        add = 0,
        temp,
        res = ''
    while (i > -1 || j > -1) {
        temp = (Number(num1[i] || 0) + Number(num2[j] || 0) + add) % 10
        res = temp + res
        add = Math.floor((Number(num1[i] || 0) + Number(num2[j] || 0) + add) / 10)
        if (i > -1) i--
        if (j > -1) j--
    }
    if (add) res = '1' + res
    return res
};