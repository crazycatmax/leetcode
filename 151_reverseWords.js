/* 151_reverseWords 翻转字符串里的单词

给定一个字符串，逐个翻转字符串中的每个单词。

示例 1：
输入: "the sky is blue"
输出: "blue is sky the"

示例 2：
输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。

示例 3：
输入: "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
 
说明：
无空格字符构成一个单词。
输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
 
进阶：
请选用 C 语言的用户尝试使用 O(1) 额外空间复杂度的原地解法。 */



// 字符串数组方法
var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(' ')
};

// if else 逐个字符判断
var reverseWords = function (s) {
  var i,
    j,
    str = '',
    res = ''
  for (i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      str += s[i]
    } else {
      if (str) {
        res = str + ' ' + res
        str = ''
      }
    }
  }
  if (str) res = str + ' ' + res
  return res.slice(0, res.length - 1)
};