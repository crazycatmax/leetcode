/* 9_palindromeNumber 回文数

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:
输入: 121
输出: true

示例 2:
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

示例 3:
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。

进阶:
你能不将整数转为字符串来解决这个问题吗？ */



//  字符串、数组方法
var isPalindrome = function (x) {
    return x === Number(x.toString().split('').reverse().join(''))
}

//  递归
var isPalindrome = function (x) {
    function recursion(s) { //定义内部函数，递归标准用法
        s = s.toString()
        var len = s.length
        if (len < 2) return true
        return s.charAt(0) === s.slice(-1) && recursion(s.slice(1, -1))
    }
    return recursion(x)
}

//  尾递归
var isPalindrome = function (x) {
    function recursion(s, bool) {  //尾递归用法，添加额外参数
        if (bool === undefined) bool = true
        s = s.toString()
        var len = s.length
        if (len < 2) return bool
        return recursion(s.slice(1, -1), bool && s.charAt(0) === s.slice(-1))
    }
    return recursion(x)
}

//  直接处理数字
var isPalindrome = function (x) {
    var res = 0,
        init = x
    if (x < 0) return false
    while (x > 0) {
        res = res * 10 + x % 10 //求出逆序数得大小
        x = Math.floor(x / 10)
    }
    return init === res
}