//Write a function. "treeLevels", that takes in the root of a binary tree. The function should return a 2-Dimensional array
//where each subarray represents a level of the tree.

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

const treeLevels = (root) => {

}

console.log(treeLevels(a));