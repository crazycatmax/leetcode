/* 70. 爬楼梯

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。

示例 1：
输入： 2
输出： 2

解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶

示例 2：
输入： 3
输出： 3

解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶

示例 3：
输入： 4
输出： 5

解释： 有五种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶 + 1 阶
2.  1 阶 + 1 阶 + 2 阶
3.  1 阶 + 2 阶 + 1 阶
4.  2 阶 + 1 阶 + 1 阶 
.  2 阶 + 2 阶 
*/



// 	常规递归 超出时间限制
var climbStairs = function (n) {
	function recursion(m) {
		if (1 === m) return 1
		if (2 === m) return 2
		return recursion(m - 1) + recursion(m - 2)
	}
	return recursion(n)
}

//  尾递归
var climbStairs = function (n) {
	function recursion(m, acc, cur) {
		if (1 === m) return cur
		if (2 === m) return acc
		return recursion(m - 1, acc + cur, acc)
	}
	return recursion(n, 2, 1)
}

//  迭代法
var climbStairs = function (n) {
	var i, acc = 2,
		cur = 1
	if (1 === n) return cur
	if (2 === n) return acc
	for (i = 3; i < n + 1; i++) {
		acc = acc + cur
		cur = acc - cur
	}
	return acc
}