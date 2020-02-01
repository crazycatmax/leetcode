/* 345. 反转字符串中的元音字母

编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

示例 1:
输入: "hello"
输出: "holle"

示例 2:
输入: "leetcode"
输出: "leotcede"

说明:
元音字母不包含字母"y"。 */



// 后进先出 栈
var reverseVowels = function (s) {
    var i,
        count = 0,
        v = [], //元音数组
        res = []  //处理后的字符数组
    for (i = 0; i < s.length; i++) {
        if ('aeiouAEIOU'.includes(s[i])) {
            v[count++] = s[i]
        }
    }
    count--
    for (i = 0; i < s.length; i++) {
        if ('aeiouAEIOU'.includes(s[i])) {
            res[i] = v[count--]
        } else {
            res[i] = s[i]
        }
    }
    return res.join('')
}

// 栈 优化
var reverseVowels2 = function (s) {
    var v = [],
        arr = s.split('')
    arr.forEach(item => 'aeiouAEIOU'.includes(item) && v.push(item))
    return arr.map(item => 'aeiouAEIOU'.includes(item) ? v.pop() : item).join('')
}

// 左右指针
var reverseVowels3 = function (s) {
    var l = 0,
        r = s.length - 1,
        temp,
        arr = s.split('')
    while (l < r) {
        for (; l < r; l++) {
            if ('aeiouAEIOU'.includes(s[l])) break
        }
        for (; l < r; r--) {
            if ('aeiouAEIOU'.includes(s[r])) break
        }
        temp = arr[l]
        arr[l] = arr[r]
        arr[r] = temp
        l++
        r--
    }
    return arr.join('')
}