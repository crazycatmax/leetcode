/* 38. 外观数列

「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。前五项如下：
1.     1
2.     11
3.     21
4.     1211
5.     111221

1 被读作  "one 1"  ("一个一") , 即 11。
11 被读作 "two 1s" ("两个一"）, 即 21。
21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。

给定一个正整数 n（1 ≤ n ≤ 30），输出外观数列的第 n 项。
注意：整数序列中的每一项将表示为一个字符串。

示例 1:
输入: 1
输出: "1"

示例 2:
输入: 4
输出: "1211" */



//  递归法
var countAndSay = function (n) {
    function recursion(t) {
        var i,
            count = 0,
            str = '',
            s
        if (t == 1) return '1'
        if (t == 2) return '11'
        s = recursion(t - 1)
        for (i = 0; i < s.length - 1; i++) {
            count++
            if (s[i] !== s[i + 1]) {
                str += `${count}${s[i]}`
                count = 0
            }
        }
        str += `${count+1}${s[i]}`
        return str
    }
    return recursion(n)
}

// 方法2  迭代法  todo
// var countAndSay = function (n) {
//   var i,
//     j,
//     s,
//     str,
//     count

//   if (n === 1) return '1'
//   if (n === 2) return '11'
//   str = '11'
//   for (i = 3; i <= n ; i++) {
//     s = str
//     count = 0
//     for (j = 0; j < s.length - 1; j++) {
//       count++
//       if (s[j] !== s[j + 1]) {
//         str += `${count}${s[j]}`
//         count = 0
//       }
//     }
//     str += `${count+1}${s[j]}`
//   }
//   return str
// }