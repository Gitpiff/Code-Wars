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
    //make the base case about the empty tree
    //if a tree is empty return -1
    if (root === null) return -1;
    //recursive call to perform depth first search
    const leftTreeHeight = howHigh(root.left);
    const rightTreeHeight = howHigh(root.right);

    //compare left and right looking for the highest value plus one because we need to return the height of the root node which is one
    return 1 + Math.max(leftTreeHeight, rightTreeHeight);

}

console.group(howHigh(a))
