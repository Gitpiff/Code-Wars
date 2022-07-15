//Write a function, "breadthFirstValues", that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order -from top to bottom- breadth refers to the width of the tree
//We'll use a queue data structure

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

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
// const breadthFirstValues = (root) => {
//     //if the tree is empty
//     if (root === null) return null;
//     //declare a results var, start it as an empty array
//     const values = [];
//     //start a queue var with the value of the root
//     const queue = [root];
//     //check the queue, if there's an element, push it to the front of it
//     while(queue.length > 0) {
//         //declare a var that stores the current node, use .shift() -removes and returns the first element of an array- to obtain that node
//         const current = queue.shift();
//         //whenever something leaves tue queue, send it to the result values array
//         values.push(current.val);
//         //check if there's any node children to the left & right of the current node
//         if (current.left !== null) queue.push(current.left);
//         if (current.right !== null) queue.push(current.right);
//     }

//     return values;
// }




const breadthFirstValues = (root) => {
    //check for a null root
    if (root === null) return [];
    //results array
    const values = [];
    //declare queue
    const queue = [ root ];

    //iterate
    while (queue.length > 0) {
        const current = queue.shift();
        values.push(current.val);

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return values;
};

console.log(breadthFirstValues(a))
