/* 589_preorder N叉树的前序遍历

给定一个 N 叉树，返回其节点值的前序遍历。
例如，给定一个 3叉树 :

返回其前序遍历: [1,3,5,6,2,4]。

说明: 递归法很简单，你可以使用迭代法完成此题吗? */



/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

//  递归
var preorder = function (root) {
    var stack = []
    function recur(root, arr) {
        if (!root) return
        arr.push(root.val)
        if (root.children) {
            root.children.forEach(t => {
                recur(t, arr)
            })
        }
    }
    recur(root, stack)
    return stack
};

// 迭代 借助队列
var preorder = function (root) {
    if (!root) return [];
    let ret = [];
    let queue = [root];
    while (queue.length) {
        let cur = queue.shift();
        ret.push(cur.val);
        queue = cur.children.concat(queue);
    }
    return ret;
};
