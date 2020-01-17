/* 119. 杨辉三角 II

给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:
输入: 3
输出: [1,3,3,1]
进阶：

你可以优化你的算法到 O(k) 空间复杂度吗？ */



// 迭代
var getRow = function (rowIndex) {
	var i,
		j,
		row = [1]
	for (i = 1; i < rowIndex + 1; i++) {
		row[i] = 1
		for (j = i - 1; j > 0; j--) {
			row[j] = row[j - 1] + row[j]
		}
	}
	return row
}

// 递归
var getRow2 = function (rowIndex) {
	function recursion(n) {
		if (n === 0) return [1]
		if (n === 1) return [1, 1]
		var arr = recursion(n - 1)
		for (var i = n - 1; i > 0; i--) {
			arr[i] = arr[i] + arr[i - 1]
		}
		arr[n] = 1
		return arr
	}
	return recursion(rowIndex)
}