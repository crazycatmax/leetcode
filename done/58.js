/* 
58. 最后一个单词的长度

给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
如果不存在最后一个单词，请返回 0 。

说明：一个单词是指由字母组成，但不包含任何空格的字符串。

示例:
输入: "Hello World"
输出: 5 */

``

// 方法1	正则表达式
var lengthOfLastWord = function (s) {
	var regex = /([a-zA-Z]+)\s*$/
	var arr = s.match(regex)
	if (!arr) return 0
	return arr[1].length
};

// 方法2	普通方法
var lengthOfLastWord = function (s) {
	var i,
		len = 0
	for (i = 0; i < s.length; i++) {
		if (s[i] === ' ' && s[i + 1] !== undefined && s[i + 1] !== ' ') { //空字符串 且 不是末尾时 且 下一个不是空字符串，长度清零
			len = 0
		} else {
			len++
		}
	}
	return len
}