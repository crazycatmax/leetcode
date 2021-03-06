/* 496. 下一个更大元素 I

给定两个没有重复元素的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2 中的下一个比其大的值。
nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出-1。

示例 1:
输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
输出: [-1,3,-1]
解释:
    对于num1中的数字4，你无法在第二个数组中找到下一个更大的数字，因此输出 -1。
    对于num1中的数字1，第二个数组中数字1右边的下一个较大数字是 3。
    对于num1中的数字2，第二个数组中没有下一个更大的数字，因此输出 -1。

示例 2:
输入: nums1 = [2,4], nums2 = [1,2,3,4].
输出: [3,-1]
解释:
    对于num1中的数字2，第二个数组中的下一个较大数字是3。
    对于num1中的数字4，第二个数组中没有下一个更大的数字，因此输出 -1。

注意:
nums1和nums2中所有元素是唯一的。
nums1和nums2 的数组大小都不超过1000。
在真实的面试中遇到过这道题？ */



// 暴力法
var nextGreaterElement = function (nums1, nums2) {
    var i,
        j,
        idx,
        res = []
    for (i = 0; i < nums1.length; i++) {
        idx = nums2.indexOf(nums1[i])   //定位nums1中元素在nums2中的位置
        for (j = idx + 1; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                res.push(nums2[j])
                break
            }
        }
        if (j === nums2.length) res.push(-1)
    }
    return res
}

// 单调栈
var nextGreaterElement = function (nums1, nums2) {
    var i = 1,
        temp,
        stack = [], //单调栈
        hash = []   //哈希map
    stack.push(nums2[0])
    while (i < nums2.length) {
        temp = stack.pop()  //对比栈顶元素
        if (temp < nums2[i]) {  //栈顶元素 < 当前元素
            hash[temp] = nums2[i]
            if (stack.length < 1) { //栈为空时，当前元素入栈
                stack.push(nums2[i])
                i++
            }
        } else {
            stack.push(temp)
            stack.push(nums2[i])
            i++
        }
    }
    while (stack.length > 0) {
        temp = stack.pop()
        hash[temp] = -1
    }
    return nums1.map(t => hash[t])
}