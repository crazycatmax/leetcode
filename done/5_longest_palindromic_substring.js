/* 
5. 最长回文子串

给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。

示例 2：
输入: "cbbd"
输出: "bb" */



// 超出时间限制
var longestPalindrome = function (s) {
	var isHui = function (str) {
		return str === str.split('').reverse().join('')
	}
	var i,
		j,
		temp,
		max = '',
		len = s.length
	for (i = 0; i < len; i++) {
		for (j = i; j < len; j++) {
			temp = s.slice(i, j + 1)
			if (isHui(temp)) max = temp.length > max.length ? temp : max
		}
	}
	return max
};