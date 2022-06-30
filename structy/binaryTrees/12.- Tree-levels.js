//Write a function. "treeLevels", that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a level of the tree.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(10);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     10
//  / \      \
// 4   -2     1

//Solution 1 breadth first (iterative)
// const treeLevels = (root) => {
//   //if tree is empty
//   if (root === null) return [];

//   const levels = [];
//   //create a stack frame -includes the node itself and the level-
//   const queue = [{ node: root, levelNum: 0 }];
//   while (queue.length > 0) {
//     const { node, levelNum } = queue.shift();

//     if (levels.length === levelNum) {
//       levels.push([node.val]);
//     } else {
//       levels[levelNum].push(node.val);
//     }

//     if (node.left !== null) queue.push({ node: node.left, levelNum: levelNum + 1 });
//     if (node.right !== null) queue.push({ node: node.right, levelNum: levelNum + 1 });
//   }

//   return levels;
// };

//Solution 2, Recursive
const treeLevels = (root) => {
    const levels = [];
    _treeLevels(root, levels, 0);
    return levels;
  };

  //helper function to drive the recursion
  const _treeLevels = (root, levels, levelNum) => {
    if (root === null) return;

    if (levels.length === levelNum) {
      levels[[levelNum]] = [root.val];
    } else {
      levels[levelNum].push(root.val);
    }

    _treeLevels(root.left, levels, levelNum + 1);
    _treeLevels(root.right, levels, levelNum + 1);
  };


console.log(treeLevels(a));
