//Write a function, "depthFirstValues", that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.
//We ust go deeper in the tree before we go transversal
//Use the stack data structure
//check if children exist before adding them to the stack

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node ("A");
const b = new Node ("B");
const c = new Node ("C");
const d = new Node ("D");
const e = new Node ("E");

a.left = b;
a.right = c;
b.left = d;
b.right = e;

//         A
//      /    \
//     B      C
//    / \
//   D   E


// //Iterative Solution
// const depthFirstValues = (root) => {
//     //if the tree is empty, we need to solve it explicitly
//     if (root === null) return [];

//     //need a  result var with an empty array to store the value of the nodes
//     const result = [];
//     //need an array to act as the stack, start it with the root value
//     //never allow a value of null to enter the stack
//     const stack = [root];
//     //loop while there's elements in the stack
//     while (stack.length > 0) {
//         //.pop() removes and returns the last element from an array
//         const current = stack.pop();
//         result.push(current.val);

//         //check if the children nodes exist before adding them to the stack
//         if(current.right) stack.push(current.right);
//         if(current.left) stack.push(current.left);
//     }

//     return result;
// }



// //Recursive Solution
// // const depthFirstValues = (root) => {
// //     if(root === null) return [];
// //     const leftValues = depthFirstValues(root.left); // [B, D, E]
// //     const rightValues = depthFirstValues(root.right); // [C]
// //     //use the spread operator to "unpack" the nodes of each left and right values
// //     return [ root.val, ...leftValues, ...rightValues];
// // }


//Iterative
const depthFirstValues = (root) => {
    //DFT always uses a stack FILO
    //base case, if the root is null, return an empty array
    if (root === null) return [];
    //declare a result array
    const result = [];
    //initialize your stack, if using an array, use push to add to the end, and pop to remove from the end of the array
    //initialize the stack with the root node "on top of it"
    const stack = [ root ];

    //while the stack is not empty
    while (stack.length > 0) {
        //start the iteration by removing the top of the stack, use .pop()
        const current = stack.pop();
        result.push(current.val);

        //check if left and right children exist, if they do push them
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }

    return result;
}

console.log(depthFirstValues(a))
