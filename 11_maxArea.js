/* 11_maxArea 盛最多水的容器
给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
说明：你不能倾斜容器，且 n 的值至少为 2。


图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

示例：
输入：[1,8,6,2,5,4,8,3,7]
输出：49  */



// 暴力循环
var maxArea = function (height) {
    var i,
        j,
        h,
        w,
        maxArea = 0,
        len = height.length
    for (i = 0; i < len - 1; i++) {
        for (j = len - 1; j > i; j--) {
            w = j - i
            h = Math.min(height[i], height[j]) //取两边的min作为高
            if (h * w > maxArea) maxArea = h * w
        }
    }
    return maxArea
};

// 保留上一轮的最大值，通过比较胜率部分循环
var maxArea = function (height) {
    var i,
        j,
        h,
        w,
        maxArea = 0,
        len = height.length,
        lastH
    for (i = 0; i < len - 1; i++) {
        lastH = height[len - 1]
        for (j = len - 1; j > i; j--) {
            if (height[j] < lastH) continue //胜率部分循环
            lastH = height[j]
            h = Math.min(height[i], height[j])
            w = j - i
            if (h * w > maxArea) maxArea = h * w
        }
    }
    return maxArea
};

// 双指针法
var maxArea = function (height) {
    var i = 0,
        j = height.length - 1,
        w,
        h,
        area = 0
    while (i < j) {
        w = j - i
        h = Math.min(height[i], height[j])
        if (w * h > area) area = w * h
        if (height[i] <= height[j]) { //哪边小哪边移动
            i++
        } else {
            j--
        }
    }
    return area
};