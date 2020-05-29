/* 633. 平方数之和

给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c。

示例1:
输入: 5
输出: True
解释: 1 * 1 + 2 * 2 = 5

示例2:
输入: 3
输出: False */



// 哈希表
var judgeSquareSum = function (c) {
    var i,
        hash = {},
        max = Math.pow(c, .5)
    for (i = 0; i <= max; i++) {
        hash[i * i] = 1
        if (hash[c - i * i]) {
            return true
        }
    }
    return false
}

// 双指针
var judgeSquareSum = function (c) {
    var i,
        j,
        temp,
        max = c ** .5
    i = 0
    j = Math.floor(max)
    while (i <= j) {
        temp = i * i + j * j
        if (temp === c) return true
        if (temp > c) {
            j--
        } else {
            i++
        }
    }
    return false
}
