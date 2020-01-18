/* 771. 宝石与石头

 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

示例 1:
输入: J = "aA", S = "aAAbbbb"
输出: 3

示例 2:
输入: J = "z", S = "ZZ"
输出: 0

注意:
S 和 J 最多含有50个字母。
 J 中的字符不重复。 */



// for 
var numJewelsInStones = function (J, S) {
    var i,
        count = 0
    for (i = 0; i < S.length; i++) {
        if (J.includes(S[i])) count++
    }
    return count
}

// for of
var numJewelsInStones2 = function (J, S) {
    var i,
        count = 0
    for (i of S) {
        if (J.includes(i)) count++
    }
    return count
};

// filter
var numJewelsInStones3 = function (J, S) {
    return S.split('').filter(el => J.includes(el)).length
}

// reduce
var numJewelsInStones4 = function (J, S) {
    return Array.from(S).reduce((acc, cur) => {
        return J.includes(cur) ? acc+1 : acc
    }, 0)
}
var numJewelsInStones4 = function (J, S) {
    return Array.from(S).reduce((acc, cur) => (J.includes(cur) ? acc+1 : acc), 0)
}