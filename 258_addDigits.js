/* 258_addDigits 各位相加

给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。

示例:
输入: 38
输出: 2 
解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。

进阶:
你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？ */



// 对每位数字求和
var addDigits = function (num) {
  var temp
  while (num > 9) {
    temp = num
    num = 0
    while (temp) {
      num += temp % 10
      temp = Math.floor(temp / 10)
    }
  }
  return num
}

/*  
    n1=a*10+b
    n2=a+b
    n1-n2=9*a

    n1=a*100+b*10+c
    n2=a+b+c
    n1-n2=99*a+9*b=(9*a+b)*9  结果相差9的倍数

    所以各位相加的结果模9 === 原数字模9
*/
var addDigits = function (num) {
  if (num < 1) return 0
  return num % 9 ? num % 9 : 9
}