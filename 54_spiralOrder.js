/* 54_spiralOrder 螺旋矩阵

给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:
输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]

示例 2:
输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7] */



// 循环迭代，待优化
var spiralOrder = function (matrix) {
    var m = matrix.length
    if (m < 1) return matrix
    var i = 0,
        j = 0,
        idx = -1,
        dis = 0,
        n = matrix[0].length,
        res = []
    while (1) {
        for (; j < n - dis; j++) {
            ++idx
            res[idx] = matrix[i][j]
        }
        if (idx === m * n - 1) return res
            --j
            ++i
        for (; i < m - dis; i++) {
            ++idx
            res[idx] = matrix[i][j]
        }
        --i
        --j
        if (idx === m * n - 1) return res
        for (; j > dis - 1; j--) {
            ++idx
            res[idx] = matrix[i][j]
        }
        if (idx === m * n - 1) return res
            ++j
            --i
        for (; i > dis; i--) {
            ++idx
            res[idx] = matrix[i][j]
        }
        if (idx === m * n - 1) return res
            ++i
            ++j
            ++dis
    }
    return res
}