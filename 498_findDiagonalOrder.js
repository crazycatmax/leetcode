/* 498_findDiagonalOrder 对角线遍历

给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。

示例:
输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

输出:  [1,2,4,7,5,3,6,8,9]
解释:

说明:
给定矩阵中的元素总数不会超过 100000 。 */



// if else 多条件判断
var findDiagonalOrder = function (matrix) {
    var row = matrix.length
    if (row < 1) return []
    var i = 0,
        j = 0,
        isUp = true,
        col = matrix[0].length,
        res = []
    while (!(i === row - 1 && j === col - 1)) {
        res.push(matrix[i][j])
        if (isUp) {
            if (j === col - 1) {
                i++
                isUp = false
            } else if (i === 0) {
                j++
                isUp = false
            } else {
                i--
                j++
            }
        } else {
            if (i === row - 1) {
                j++
                isUp = true
            } else if (j === 0) {
                i++
                isUp = true
            } else {
                i++
                j--
            }
        }

    }
    res.push(matrix[i][j])
    return res
};