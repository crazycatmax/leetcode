/* 509_fib 斐波那契数

斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
给定 N，计算 F(N)

示例 1：
输入：2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1.

示例 2：
输入：3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2.

示例 3：
输入：4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3.
 
提示：
0 ≤ N ≤ 30
 */



// 递归
var fib = function (N) {
	if (N < 2) return N
	return fib(N - 1) + fib(N - 2)
};

// 带缓存的递归
var fib = function (N) {
	var cache = {}
	function recur(n) {
		if (cache[n]) return cache[n]
		if (n < 2) return n
		return cache[n] = recur(n - 1) + recur(n - 2)
	}
	return recur(N)
};

// 尾递归
var fib = function (N) {
	function recursion(m, acc, cur) {
		if (0 === m) return cur
		if (1 === m) return acc
		return recursion(m - 1, acc + cur, acc)
	}
	return recursion(N, 1, 0)
};

// 迭代
var fib = function (N) {
	if (N < 2) return N
	var fa = 0,
		fb = 1
	while (N - 1 > 0) {
		fb = fa + fb
		fa = fb - fa
		N--
	}
	return fb
};
