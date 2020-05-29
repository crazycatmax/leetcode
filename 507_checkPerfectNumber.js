/* 507_checkPerfectNumber 完美数

对于一个 正整数，如果它和除了它自身以外的所有正因子之和相等，我们称它为“完美数”。
给定一个 整数 n， 如果他是完美数，返回 True，否则返回 False

示例：
输入: 28
输出: True
解释: 28 = 1 + 2 + 4 + 7 + 14
 
提示：
输入的数字 n 不会超过 100,000,000. (1e8) */



// 暴力循环，判断因子，累加
var checkPerfectNumber = function (num) {
	var i,
		sum = 0
	if (num < 2) return false
	for (i = 2; i < num / 2 + 1; i++) {	//循环条件为一半位置
		if (num % i === 0) sum += i
	}
	return num === sum
};

// 循环，优化，以平方根作为基准，一次累加两个数
var checkPerfectNumber = function (num) {
	var i,
		temp,
		sum = 1
	if (num < 2) return false
	temp = Math.pow(num, 0.5)
	for (i = 2; i <= temp; i++) {
		if (num % i === 0) sum += (i + num / i)
	}
	return num === sum
};