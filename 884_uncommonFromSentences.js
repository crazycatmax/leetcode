/* 884_uncommonFromSentences 两句话中的不常见单词

给定两个句子 A 和 B 。 （句子是一串由空格分隔的单词。每个单词仅由小写字母组成。）
如果一个单词在其中一个句子中只出现一次，在另一个句子中却没有出现，那么这个单词就是不常见的。
返回所有不常用单词的列表。
您可以按任何顺序返回列表。

示例 1：
输入：A = "this apple is sweet", B = "this apple is sour"
输出：["sweet","sour"]

示例 2：
输入：A = "apple apple", B = "banana"
输出：["banana"]
 
提示：
0 <= A.length <= 200
0 <= B.length <= 200
A 和 B 都只包含空格和小写字母。 */



var uncommonFromSentences = function (A, B) {
    var arrA = A.split(' '),
        arrB = B.split(' ')
    return arrA.filter(t => arrA.indexOf(t) === arrA.lastIndexOf(t) && arrB.indexOf(t) === -1).concat(arrB.filter(t => arrB.indexOf(t) === arrB.lastIndexOf(t) && arrA.indexOf(t) === -1))
};

var uncommonFromSentences = function (A, B) {
    return A.split(' ').concat(B.split(' ')).filter((t, idx, arr) => arr.indexOf(t) === arr.lastIndexOf(t))
};

var uncommonFromSentences = function (A, B) {
    return (A + ' ' + B).split(' ').filter((t, idx, arr) => arr.indexOf(t) === arr.lastIndexOf(t))
};

var uncommonFromSentences = function (A, B) {
    let arr = (A + ' ' + B).split(' ')
    let res = []
    let obj = {}
    for (let i of arr) {
        obj[i] ? (obj[i]++) : (obj[i] = 1)
    }
    for (let i in obj) {
        if (obj.hasOwnProperty(i) && obj[i] === 1) res.push(i)
    }
    return res
};