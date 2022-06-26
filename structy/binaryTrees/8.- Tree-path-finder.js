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

const root = new Node(0);
let curr = root;
for (let i = 1; i <= 6000; i += 1) {
  curr.right = new Node(i);
  curr = curr.right;
}

const pathfinder = (root, target) => {
    const result = pathfinderHelper(root, target);
    if (result === null) {
        return null;
    } else {
        return result.reverse()
    }
}

const pathfinderHelper = (root, target) => {
    //if given an empty tree
    if (root === null) return null;
    //if the root.val is equal to the target, return an array containing the root.val
    if (root.val === target) return [ root.val ];

    const letfPath = pathfinderHelper(root.left, target);
    if (letfPath !== null) {
        letfPath.push(root.val);
        return letfPath;
    }

    const rightPath = pathfinderHelper(root.right, target);
    if (rightPath !== null) {
       rightPath.push(root.val);
       return rightPath;
    }

    return null;
}

console.log(pathfinder(root, 5999))