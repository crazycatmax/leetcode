/* 67. 二进制求和

给定两个二进制字符串，返回他们的和（用二进制表示）。
输入为非空字符串且只包含数字 1 和 0。

示例 1:
输入: a = "11", b = "1"
输出: "100"

示例 2:
输入: a = "1010", b = "1011"
输出: "10101" */



var addBinary = function (a, b) {
  var i,
    len, //两个字符串最大长度
    temp, //每一位加上进位后求和
    arr = []
  add = 0 //进位
  len = Math.max(a.length, b.length)
  for (i = 0; i < len; i++) {
    temp = (Number(a[a.length - 1 - i]) || 0) + (Number(b[b.length - 1 - i]) || 0) + add //或0 可以合并字符串中当前位置不存在的元素
    add = Math.floor(temp / 2)
    arr.push(temp % 2)
  }
  if (add) arr.push(1)
  return arr.reverse().join('')
}