/* 7. 整数反转

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:
输入: 123
输出: 321

 示例 2:
输入: -123
输出: -321

示例 3:
输入: 120
输出: 21

注意:
假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。
请根据这个假设，如果反转后整数溢出那么就返回 0。 */



//  字符串和数组方法，正则匹配
const max = 2147483647
const min = -2147483648
var reverse = function (x) {
    var negative = x < 0
    x = Math.abs(x).toString().split('').reverse().join('').replace(/^0*/, '')
    if (negative) x = -x
    return x > max || x < min ? 0 : x
}

//  遍历整数每一位，逆序求和
var reverse2 = function (x) {
    var negative = x < 0,
        res = 0
    x = Math.abs(x)
    while (x) {
        res = res * 10 + x % 10
        x = Math.floor(x / 10)
    }
    if (negative) res = -res
    return res < min || res > max ? 0 : res
}

//  递归
var reverse3 = function (x) {
    var negative = x < 0,
        res
    if (x === 0) return 0
    x = x.toString().replace(/^[+-]/, '').replace(/0*$/, '')
    function recursion(s) {
        var len = s.length
        if (len < 2) return s
        return s.slice(-1) + recursion(s.slice(1, -1)) + s.charAt(0)
    }
    res = recursion(x)
    if (negative) res = -res
    return res < min || res > max ? 0 : res
}

//  尾递归
var reverse4 = function (x) {
    var negative = x < 0,
        res
    if (x === 0) return 0
    x = x.toString().replace(/^[+-]/, '').replace(/0*$/, '')
    function recursion(sStart, s, sEnd) {
        var len = s.length
        if (len < 2) return sStart + s + sEnd
        return recursion(sStart + s.slice(-1), s.slice(1, -1), s.charAt(0) + sEnd)
    }
    res = recursion('', x, '')
    if (negative) res = -res
    return res < min || res > max ? 0 : res
}