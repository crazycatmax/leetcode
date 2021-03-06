/* 231_isPowerOfTwo 2的幂

给定一个整数，编写一个函数来判断它是否是 2 的幂次方。

示例 1:
输入: 1
输出: true
解释: 20 = 1

示例 2:
输入: 16
输出: true
解释: 24 = 16

示例 3:
输入: 218
输出: false */



// 位运算 2的幂次方 32位只有一个1
var isPowerOfTwo = function (n) {
    var len = 32,
        count = 0
    if (n <= 0) return false
    while (len--) {
        if (n & 1 === 1) count++
        n >>= 1
    }
    return count === 1
};

// 利用 2幂次方的特点 1000-1 => 111
var isPowerOfTwo = function (n) {
    if (n <= 0) return false;
    if ((n & n - 1) === 0) return true;
    return false;
};