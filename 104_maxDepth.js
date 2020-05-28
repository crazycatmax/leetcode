/* 104_maxDepth 二叉树的最大深度

给定一个二叉树，找出其最大深度。
二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。 */



// 借助 max函数 递归实现
var maxDepth = function (root) {
  if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

// 借助 stack 实现深度优先搜索
var maxDepth = function (root) {
  var stack = [],
    maxDep = 0,
    temp
  stack.push({
    dep: 1,
    node: root
  })
  while (stack.length > 0) {
    temp = stack.pop()
    if (temp.node) {
      maxDep = Math.max(maxDep, temp.dep)
      stack.push({
        dep: temp.dep + 1,
        node: temp.node.left
      })
      stack.push({
        dep: temp.dep + 1,
        node: temp.node.right
      })
    }
  }
  return maxDep
}