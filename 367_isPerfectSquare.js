/* 367. 有效的完全平方数

给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。
说明：不要使用任何内置的库函数，如  sqrt。

示例 1：
输入：16
输出：True

示例 2：
输入：14
输出：False */



// 
var isPerfectSquare = function (num) {
    var i = 1,
        temp
    while (1) {
        temp = i * i
        if (temp === num) return true
        if (temp > num) return false
        i++
    }
}

// 
var isPerfectSquare2 = function (num) {
    var i = 1,
        temp = 0
    while (1) {
        temp += 2 * i - 1
        if (temp === num) return true
        if (temp > num) return false
        i++
    }
}

//  **幂运算
var isPerfectSquare3 = function (num) {
    return num ** .5 % 1 === 0
}

//  数学公式 n*n = 1+3+...+2n-1
var isPerfectSquare4 = function (num) {
    var i
    for (i = 1; i < 2 * num; i += 2) {
        num -= i
    }
    return !num
    // return num === 0
}

//  二分模板
var isPerfectSquare5 = function (num) {
    var l = 0,
        r = num,
        hash = {},
        temp = Math.floor((l + r) / 2)
    if (num === 1) return true
    if (num === 2) return false
    if (num === 3) return false
    while (!hash[temp]) {
        hash[temp] = 1
        if (temp * temp === num) return true
        if (temp * temp < num) {
            l = temp + 1
        } else {
            r = temp - 1
        }
        temp = Math.floor((l + r) / 2)
    }
    return false
}

