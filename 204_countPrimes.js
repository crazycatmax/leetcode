/* 204_countPrimes 计数质数

统计所有小于非负整数 n 的质数的数量。

示例:
输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。 */



// 迭代法
var countPrimes = function (n) {
  var i, count = 0

  function isPrime(num) {
    var i, end
    if (num < 2) return false
    if (num === 2) return true
    end = Math.sqrt(num)
    for (i = 2; i < end + 1; i++) {
      if (num % i === 0) return false
    }
    return true
  }
  for (i = 2; i < n; i++) {
    if (isPrime(i)) count++
  }
  return count
}

// Sieve of Eratosthenes算法
var countPrimes2 = function (n) {
  var i,
    j,
    count = 0,
    arr = []
  for (i = 2; i < n; i++) {
    arr[i] = 1
  }
  for (i = 2; i * i < n; i++) {
    if (arr[i]) { //值不为0，则没有被剔除，是质数因子
      for (j = i * i; j < n; j += i) {  //剔除质数因子的倍数
        arr[j] = 0
      }
    }
  }
  for (i = 2; i < n; i++) {
    if (arr[i]) count++
  }
  return count
}