//Write a function, "pathfinder", that takes in the root of a binary tree and a target value. The function should 
//return an array representing a path to the target value. If the target value is not found in the tree
//then return null. You may assume the tree contains unique values.

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

const pathfinder = (root, target) => {

}

console.log(pathfinder(a, "e"))