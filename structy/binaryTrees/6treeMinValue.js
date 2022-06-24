//Write a function, "treeMinValue", that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.

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

//Solution 1, Iterative Depth First
// const treeMinValue = (root) => {
//     //check if tree is empty
//     if (root === null) return null;
//     //declare stack
//     const stack = [root];
//     //start a minimum var, and replace it every time the new value is smaller than this var, start it at infinity because it'll be guaranteed that any number we have will be smaller than our var
//     let smallest = Infinity;
//     //iterate
//     while (stack.length > 0) {
//         //create a current var to track the current element
//         const current = stack.pop();
//         if (current.val < smallest) smallest = current.val;
//         //check if children nodes exist
//         if(current.left) queue.push(current.left);
//         if(current.right) queue.push(current.right);
//     }
//     return smallest;
// }


//Solution 2, Iterative Breadth First
// const treeMinValue = (root) => {
//     //check if tree is empty
//     if (root === null) return null;
//     //declare queue
//     const queue = [root];
//     //start a minimum var, and replace it every time the new value is smaller than this var, start it at infinity because it'll be guaranteed that any number we have will be smaller than our var
//     let smallest = Infinity;
//     //iterate
//     while (queue.length > 0) {
//         //create a current var to track the current element
//         const current = queue.shift();
//         if (current.val < smallest) smallest = current.val;
//         //check if children nodes exist
//         if(current.left) queue.push(current.left);
//         if(current.right) queue.push(current.right);
//     }
//     return smallest;
// }

//Recursive
const treeMinValue = (root) => {
    if (root === null) return Infinity;

    //get the children nodes
    const leftMin = treeMinValue(root.left);
    const rightMin = treeMinValue(root.right);
    //use Math.min() to return the smallest num between the three arguments passed
    return Math.min(root.val, leftMin, rightMin);
}



console.log(treeMinValue(a))
