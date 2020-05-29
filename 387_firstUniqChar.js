/* 387_firstUniqChar 字符串中的第一个唯一字符

给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

案例:
s = "leetcode"
返回 0.
s = "loveleetcode",
返回 2. */



// 字符串方法
var firstUniqChar = function (s) {
  var i
  for (i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i
  }
  return -1
};

// 暴力循环
var firstUniqChar = function (s) {
  var i,
    j
  for (i = 0; i < s.length; i++) {
    for (j = 0; j < s.length; j++) {
      if (s[i] === s[j] && i !== j) break
    }
    if (j === s.length) return i
  }
  return -1
};