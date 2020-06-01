/* 260_singleNumber 只出现一次的数字 III

给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。

示例 :
输入: [1,2,1,3,2,5]
输出: [3,5]

注意：
结果输出的顺序并不重要，对于上面的例子， [5, 3] 也是正确答案。
你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？ */



// 数组方法
var singleNumber = function (nums) {
    return nums.filter(t => nums.indexOf(t) === nums.lastIndexOf(t))
};

// 位运算
var singleNumber = function (nums) {
    let xor = 0
    let num1 = 0
    let num2 = 0
    // 1.对整个数组所有的数字合起来做一次异或操作
    // 由于数值相同的值异或就是0,那么结果就是只出
    // 现一次的两个数a,b的异或结果，结果里至少有一个位的值为1，意味着这个位上，要么a是1，b是0，要么b是1，a是0
    for (let num of nums) {
        xor ^= num
    }
    let i = 1
    // 2.找到这个1的位置 这里取最低位
    while ((xor & 1) === 0) {
        xor = xor >> 1
        i = i << 1
    }
    //3.根据所有的数的二进制值，在这个1对应的位置是否为1，可将数组一分为二，为1的做一次异或运算，为0的做一次异或运算，即可求出两数。
    for (let j = 0; j < nums.length; j++) {
        if ((nums[j] & i) == 0) {
            num1 ^= nums[j]
        } else {
            num2 ^= nums[j]
        }
    }
    return [num1, num2]
};