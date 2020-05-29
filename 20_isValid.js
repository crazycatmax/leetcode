/* 20_isValid 有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:
输入: "()"
输出: true

示例 2:
输入: "()[]{}"
输出: true

示例 3:
输入: "(]"
输出: false

示例 4:
输入: "([)]"
输出: false

示例 5:
输入: "{[]}"
输出: true */


// 
var isValid = function (s) {
  var i,
    stack = [],
    left = ['(', '[', '{'],
    right = [')', ']', '}'],
    couple = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
  for (i = 0; i < s.length; i++) {
    if (left.includes(s[i])) stack.push(s[i]) //左括号，则入栈
    if (right.includes(s[i]) && s[i] !== couple[stack.pop()]) //右括号，则出栈，通过对象映射，进行比较
      return false
  }
  return stack.length === 0
}


// 
var isValid = function (s) {
  var i,
    stack = [],
    couple = {
      ')': '(',
      ']': '[',
      '}': '{'
    }
  for (i = 0; i < s.length; i++) {
    if (['(', '[', '{'].includes(s[i])) stack.push(s[i])
    if ([')', ']', '}'].includes(s[i]) && couple[s[i]] !== stack.pop()) return false
  }
  return stack.length === 0
}