/* 6_convert Z 字形变换

将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
L   C   I   R
E T O E S I I G
E   D   H   N
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);

示例 1:
输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"

示例 2:
输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:

L     D     R
E   O E   I I
E C   I H   N
T     S     G */

// 数组变换
var convert = function (s, numRows) {
    var i,
        j,
        len = s.length,
        roundLen = 2 * numRows - 2,
        res = ''
    if (numRows < 2) return s
    for (i = 0; i < numRows; i++) {
        for (j = 0; j + i < len; j += roundLen) {
            res += s[i + j]
            // 对于非首尾行的字符串，需要添加两次，即一个轮回添加俩字母
            if (i !== 0 && i !== numRows - 1 && j + roundLen - i < len) {
                res += s[j + roundLen - i]
            }
        }
    }

    return res
};