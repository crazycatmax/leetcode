/* 118_generate 杨辉三角

给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:
输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]  */



// 暴力循环
var generate = function (numRows) {
	var i,
		j,
		arr = [],
		row
	for (i = 0; i < numRows; i++) {
		row = []
		for (j = 0; j < i + 1; j++) {
			if (j === 0 || j === i) {
				row.push(1)
			} else {
				row.push(arr[i - 1][j] + arr[i - 1][j - 1])
			}
		}
		arr.push(row)
	}
	return arr
}