//Write a function, "treeIncludes", that takes in the root of a binary tree and a target value.
//The function should return a boolean indicating whether or not the value is contained in the tree.

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


//Iterative Solution
// const treeIncludes = (root, target) => {
//     //if tree is empty
//     if (root === null) return false;

//     const queue = [root];
//     while (queue.length > 0) {
//         const current = queue.shift();
//         console.log(current.val);
//         //check if the children nodes exist before adding them to the stack
//         if (current.val === target) return true;

//         if(current.left) queue.push(current.left);
//         if(current.right) queue.push(current.right);
//     }

//     return false;

// }

//Recursive Solution
const treeIncludes = (root, target) => {
    //check if tree is empty
    if (root === null) return false;
    //if the root is the target
    if (root === target) return true;
    
    return treeIncludes(root.left, target) || treeIncludes(root.right, target);
}

console.log(treeIncludes(a, "f"))
