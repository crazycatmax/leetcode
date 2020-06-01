/* 88_merge 合并两个有序数组
给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

 

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 

示例:

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6] */



// 从前往后
var merge = function (nums1, m, nums2, n) {
    var i,
        j,
        index = 0
    if (!n) return nums1
    for (i = n + m - 1; i >= n; i--) {
        nums1[i] = nums1[i - n]
    }
    i = n
    j = 0
    while (i < m + n && j < n) {
        if (nums1[i] < nums2[j]) { //选取小的
            nums1[index++] = nums1[i++]
        } else {
            nums1[index++] = nums2[j++]
        }
    }
    while (j < n) {
        nums1[index++] = nums2[j++]
    }
    return nums1
};

// 从后往前
var merge = function (nums1, m, nums2, n) {
    if (!n) return nums1
    var i = m - 1,
        j = n - 1,
        index = m + n - 1
    while (i > -1 && j > -1) {
        if (nums1[i] > nums2[j]) { //选取大的
            nums1[index--] = nums1[i--]
        } else {
            nums1[index--] = nums2[j--]
        }
    }
    while (j > -1) {
        nums1[index--] = nums2[j--]
    }
    return nums1
};