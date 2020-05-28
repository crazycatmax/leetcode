/* 223_computeArea 矩形面积

在二维平面上计算出两个由直线构成的矩形重叠后形成的总面积。
每个矩形由其左下顶点和右上顶点坐标表示，如图所示。

Rectangle Area

示例:
输入: -3, 0, 3, 4, 0, -1, 9, 2
输出: 45 */



// 通过min max函数计算
var computeArea = function (A, B, C, D, E, F, G, H) {
  var overlap,    //重叠面积
    sumArea = (C - A) * (D - B) + (G - E) * (H - F)
  if (E >= C || A >= G || B >= H || F >= D)
    return sumArea
  overlap = (Math.min(C, G) - Math.max(A, E)) * (Math.min(D, H) - Math.max(B, F))
  return sumArea - overlap
};