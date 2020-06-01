/* 172_trailingZeroes 阶乘后的零

给定一个整数 n，返回 n! 结果尾数中零的数量。

示例 1:
输入: 3
输出: 0
解释: 3! = 6, 尾数中没有零。

示例 2:
输入: 5
输出: 1
解释: 5! = 120, 尾数中有 1 个零.

说明: 你算法的时间复杂度应为 O(log n) 。*/



// 理论可行,阶乘溢出,结果错误
var trailingZeroes = function (n) {
    var i, count = 0,
        res = 1
    for (i = 1; i < n + 1; i++) {
        res *= i
    }
    while (res % 10 === 0 && res > 0) {
        count++
        res = res / 10
    }
    return count
}

// 求阶乘中5的因子的个数
var trailingZeroes = function (n) {
    var count = 0
    while (n > 0) {
        count += Math.floor(n / 5)
        n = Math.floor(n / 5)
    }
    return count
}