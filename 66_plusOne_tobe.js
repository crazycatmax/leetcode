/* 66_plusOne 加一

给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:
输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。

示例 2:
输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
 */



//  注意进位
var plusOne = function (digits) {
    var i,
        add = false, //是否有进位
        len = digits.length
    digits[len - 1]++ //+1启动连锁反应
    for (i = len - 1; i > -1; i--) {
        if (add) {
            digits[i]++
            add = false
        }
        if (digits[i] > 9) {
            digits[i] = 0
            add = true
        }
    }
    if (add) digits.unshift(1)
    return digits
};


// 对if-else优化
var plusOne = function (digits) {
    var i,
        add = false
    digits[digits.length - 1]++
    for (i = digits.length - 1; i > -1; i--) {
        digits[i] += add
        add = digits[i] >= 10
        digits[i] %= 10
    }
    if (add) digits.unshift(1)
    return digits
};