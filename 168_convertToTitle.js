/* 168_convertToTitle Excel表列名称

给定一个正整数，返回它在 Excel 表中相对应的列名称。

例如，
    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...

示例 1:
输入: 1
输出: "A"

示例 2:
输入: 28
输出: "AB"

示例 3:
输入: 701
输出: "ZY" */



// 
var convertToTitle = function (n) {
    var temp,
        stack = [],
        str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        s = ''
    while (n) {
        n-- //关键语句
        temp = n % 26
        stack.push(temp)
        n = Math.floor(n / 26)
    }
    while ((temp = stack.pop()) !== undefined) {
        s += str.charAt(temp)
    }
    return s
}