/* 171_titleToNumber Excel表列序号

给定一个Excel表格中的列名称，返回其相应的列序号。
例如，
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...

示例 1:
输入: "A"
输出: 1

示例 2:
输入: "AB"
输出: 28

示例 3:
输入: "ZY"
输出: 701
致谢：
特别感谢 @ts 添加此问题并创建所有测试用例。 */



//  关键点 1-26 => 0-25
var titleToNumber = function (s) {
  var letterStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    arr = s.split(''),
    sum = 0
  while (arr.length > 0) {
    sum = sum * 26 + letterStr.indexOf(arr.shift()) + 1
  }
  return sum
}