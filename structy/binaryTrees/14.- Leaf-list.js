//Write a function, "leafList", that takes in the root of a binary tree, and returns an array containing the values of
//all leaf nodes in left to right order

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

//Solution 1, Iterative
// const leafList = (root) => {
//     //if tree is empty
//     if (root === null) return [];

//     //create a var that will store the solution array
//     const leaves = [];

//     //start stack with the root node
//     const stack = [ root ];
//     //while stack is not empty, keep removing things from the top of it
//     while (stack.length > 0) {
//         //store the top value in the current var
//         const current = stack.pop();
//         //when this value leaves the stack, check if it is a leaf
//         if (current.left === null && current.right === null) leaves.push(current.val);

//         //check for children, if they exist add them to the stack
//         if (current.right !== null) stack.push(current.right);
//         if (current.left !== null) stack.push(current.left);
//     }


//     return leaves;
// };

//Solution 2 Recursive
const leafList = (root) => {
    //create a var that will store the solution array
    const leaves = [];

   //call the helper function
   fillLeaves(root, leaves);

    return leaves;
};

//Create a helper function that does the recursion
const fillLeaves = (root, leaves) => {
    //base case
    if (root === null) return;
    //check if they are leaves
    if (root.left === null && root.right === null) leaves.push(root.val);

    //recursively call the fx
    fillLeaves(root.left, leaves);
    fillLeaves(root.right, leaves);

}

console.log(leafList(a));