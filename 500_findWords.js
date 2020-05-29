/* 
500_findWords 键盘行

给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。键盘如下图所示。

示例：
输入: ["Hello", "Alaska", "Dad", "Peace"]
输出: ["Alaska", "Dad"]
 
注意：
你可以重复使用键盘上同一字符。
你可以假设输入的字符串将只包含字母。
 */



// 数组方法
var findWords = function (words) {
    var s1 = 'qwertyuiop',
        s2 = 'asdfghjkl',
        s3 = 'zxcvbnm',
        arr
    return words.filter(item => {
        arr = item.toLowerCase().split('')
        return arr.every(t => s1.includes(t)) || arr.every(t => s2.includes(t)) || arr.every(t => s3.includes(t))
    })
};