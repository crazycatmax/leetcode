/* 661_imageSmoother 图片平滑器

包含整数的二维矩阵 M 表示一个图片的灰度。
你需要设计一个平滑器来让每一个单元的灰度成为平均灰度 (向下舍入) ，
平均灰度的计算是周围的8个单元和它本身的值求平均，
如果周围的单元格不足八个，则尽可能多的利用它们。

示例 1:

输入:
[[1,1,1],
 [1,0,1],
 [1,1,1]]

输出:
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]

解释:
对于点 (0,0), (0,2), (2,0), (2,2): 平均(3/4) = 平均(0.75) = 0
对于点 (0,1), (1,0), (1,2), (2,1): 平均(5/6) = 平均(0.83333333) = 0
对于点 (1,1): 平均(8/9) = 平均(0.88888889) = 0

注意:
给定矩阵中的整数范围为 [0, 255]。
矩阵的长和宽的范围均为 [1, 150]。 */



var imageSmoother = function (M) {
    let rows = M.length,
        cols = M[0].length
    let res = []
    for (let i = 0; i < rows; i++) {
        res[i] = []
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {// 定位到点
            let sum = count = 0
            // m n 的范围判断 精髓，通过max min函数 将边界包含进去
            for (let m = Math.max(0, i - 1); m <= Math.min(rows - 1, i + 1); m++) {
                for (let n = Math.max(0, j - 1); n <= Math.min(cols - 1, j + 1); n++) {
                    sum += M[m][n]
                    count++
                }
            }
            res[i][j] = Math.floor(sum / count)
        }
    }
    return res
};