//Write a function, "howHigh", that takes in the root of a binary tree. The function should return a number
//representing the height of the tree. The height of a binary tree is defined as the maximal number of edges from the
//root node to any leaf node. If the tree is empty, return -1.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

const howHigh = (root) => {

}

console.group(howHigh(a))