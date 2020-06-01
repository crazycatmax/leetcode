/* 590_postorder N叉树的后序遍历

给定一个 N 叉树，返回其节点值的后序遍历。

例如，给定一个 3叉树 :

返回其后序遍历: [5,6,3,2,4,1].

说明: 递归法很简单，你可以使用迭代法完成此题吗? */



/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

//  递归 数组拼接
var postorder = function (root) {
    if (!root) return []
    if (!root.children) return [root.val]
    var arr = []
    if (root.children && root.children.length > 0) {
        root.children.forEach(t => {
            arr = arr.concat(postorder(t))
        })
    }
    arr.push(root.val)
    return arr
};