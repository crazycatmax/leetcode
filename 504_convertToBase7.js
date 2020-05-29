/* 500_convertToBase7 七进制数

给定一个整数，将其转化为7进制，并以字符串形式输出。

示例 1:
输入: 100
输出: "202"

示例 2:
输入: -7
输出: "-10"

注意: 输入范围是 [-1e7, 1e7] 。 */



// Number 方法
var convertToBase7 = function (num) {
    return num.toString(7)
};

// 公式转换法
var convertToBase7 = function (num) {
    var res = '',
        base = 7,
        stack = [],
        negative = num < 0
    if (num === 0) return '0'
    num = Math.abs(num)
    while (num) {
        stack.push(num % base)
        num = Math.floor(num / base)
    }
    while (stack.length > 0) {
        res += stack.pop()
    }
    return negative ? '-' + res : res
};