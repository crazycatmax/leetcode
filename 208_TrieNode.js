/* 208_TrieNode 实现 Trie (前缀树)

实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。

示例:
Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // 返回 true
trie.search("app");     // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");   
trie.search("app");     // 返回 true

说明:
你可以假设所有的输入都是由小写字母 a-z 构成的。
保证所有输入均为非空字符串。 */



/**
 * Initialize your data structure here.
 */
var TrieNode = function (val) {
    this.val = val
    this.next = {}
    this.isEnding = false
}

var Trie = function () {
    this.root = new TrieNode('/')
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    var p = this.root
    for (let c of word) {
        if (!p.next[c]) p.next[c] = new TrieNode()
        p = p.next[c]
    }
    p.isEnding = true
}

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    var p = this.root
    for (let c of word) {
        if (!p.next[c]) return false
        p = p.next[c]
    }
    return p.isEnding
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    var p = this.root
    for (let c of prefix) {
        if (!p.next[c]) return false
        p = p.next[c]
    }
    return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */