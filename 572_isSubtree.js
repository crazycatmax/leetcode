/* 572_isSubtree 另一个树的子树

给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。
s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。

示例 1:

给定的树 s:
     3
    / \
   4   5
  / \
 1   2

给定的树 t：
   4 
  / \
 1   2

返回 true，因为 t 与 s 的一个子树拥有相同的结构和节点值。

示例 2:

给定的树 s：
     3
    / \
   4   5
  / \
 1   2
    /
   0

给定的树 t：
   4
  / \
 1   2

返回 false。 */



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 递归判断
var isSubtree = function (s, t) {
    if (!s && !t) return true
    if (!s && t) return false
    return isEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
};

// 递归判断俩节点是否结构一致
var isEqual = function (ta, tb) {
    if (!ta && !tb) return true
    return ta && tb
        && ta.val === tb.val
        && isEqual(ta.left, tb.left)
        && isEqual(ta.right, tb.right)
}