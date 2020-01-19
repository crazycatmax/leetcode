/* 264. 丑数 II

编写一个程序，找出第 n 个丑数。
丑数就是只包含质因数 2, 3, 5 的正整数。

示例:
输入: n = 10
输出: 12

解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
说明:  
1 是丑数。
n 不超过1690。 */



var nthUglyNumber = function (n) {
  var r2 = 0,
    r3 = 0,
    r5 = 0,
    min
  var result = [1]
  while (result.length < n) {
    min = Math.min(result[r2] * 2, result[r3] * 3, result[r5] * 5)
    if (min === result[r2] * 2) r2++
    if (min === result[r3] * 3) r3++
    if (min === result[r5] * 5) r5++
    result.push(min)
  }
  return result[n - 1]
}