/* 22_generateParenthesis 括号生成
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例：
输入：n = 3
输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
     ] */



//  回溯法
var generateParenthesis = function (n) {
  var res = []
  dfs('', 0, 0, n, res)
  return res
};
// dfs
var dfs = function (str, p, q, n, res) {
  if (q === n) { //结束条件
    res.push(str)
  } else {
    if (p < n) {
      dfs(str + '(', p + 1, q, n, res) //左括号( +1
    }
    if (q < n && q < p) { //右括号必须小于左括号，即括号必须有效
      dfs(str + ')', p, q + 1, n, res) //右括号) +1
    }
  }
}