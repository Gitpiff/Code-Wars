//Write a function, "maxPathsum", that takes in the root of a binary tree that contains number values. The function should return the maximum sum of any root to leaf path within the tree.
//You may assume that the input tree is non-empty.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
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
//   11     4
//  / \      \
// 4   -2     1

const maxPathsum = (root) => {
    //if one of the leaves has only one child
    if (root === null) return - Infinity;

    //base case if three does not contain any leaves
    if (root.left === null && root.right === null) return root.val;

    //choose the biggest value of the leaf and add the root to it
    const maxChildPathSum = Math.max(maxPathsum(root.left), maxPathsum(root.right));
    //return the sum of the root.val and the max value ^
    return root.val + maxChildPathSum;

}

console.log(maxPathsum(a))
