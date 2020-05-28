/* 125_lsPalindrome 验证回文串

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:
输入: "A man, a plan, a canal: Panama"
输出: true

示例 2:
输入: "race a car"
输出: false */



// 正则表达式
var lsPalindrome = function (s) {
	s = s.replace(/[^a-zA-Z0-9]/g, '')
	s = s.replace(/[A-Z]/g, match => String.fromCharCode(match.codePointAt(0) + 32))
	return s.split('').reverse().join('') === s
};

// 遍历，双指针
var isPalindrome2 = function (s) {
	s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
	var l, r
	for (l = 0, r = s.length - 1; l < r; l++, r--) {
		if (s[l] !== s[r]) 
			return false;
	}
	return true
};