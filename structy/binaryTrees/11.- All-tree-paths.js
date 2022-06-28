//Write a function, "allTreePaths", that takes in the root of a binary tree. the function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.
//The order within an individual path must start at the root and end at the leaf, but the relative order among paths in the outer array does not matter.
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

const allTreePaths = (root) => {

}

console.log(allTreePaths(a))
