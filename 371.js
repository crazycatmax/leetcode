/* 371. 两整数之和

不使用运算符 + 和 - ​​​​​​​，计算两整数 ​​​​​​​a 、b ​​​​​​​之和。

示例 1:
输入: a = 1, b = 2
输出: 3

示例 2:
输入: a = -2, b = 3
输出: 1 */



// 迭代 位移操作<<
var getSum = function (a, b) {
    var temp
    while (b) {    //左移直到进位为0，也就是左移32次
        temp = a ^ b
        b = (a & b) << 1    //与操作得到进位，
        a = temp
    }
    return a
}

// 递归 位移操作<<
var getSum = function (a, b) {
    if(!b) return a
    return getSum(a ^ b, (a & b) << 1)
}