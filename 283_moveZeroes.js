/* 283_moveZeroes 移动零

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]

说明:
必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。 */



// 
var moveZeroes = function (nums) {
    var i,
        j,
        len = nums.length
    for (i = 0; i < len; i++) {
        if (!nums[i]) {
            for (j = i; j < nums.length - 1; j++) {
                nums[j] = nums[j + 1]
            }
            nums[j] = 0
            i--
            len--
        }
    }
    return nums
};

var moveZeroes = function (nums) {
    var i,
        j,
        count = 0
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
            i--
            if (++count === nums.length) break
        }
    }
    return nums
};

var moveZeroes = function (nums) {
    var i,
        count = 0
    for (i = 0; i < nums.length; i++) {
        if (!nums[i]) {
            count++
            nums.splice(i, 1)
            i--
        }
    }
    while (count--) {
        nums.push(0)
    }
    return nums
};

// 双指针
var moveZeroes = function (nums) {
    var i,
        j = 0
    for (i = 0; i < nums.length; i++) {
        if (nums[i]) {
            nums[j++] = nums[i]
        }
    }
    for (i = j; i < nums.length; i++) {
        nums[i] = 0
    }
    return nums
};