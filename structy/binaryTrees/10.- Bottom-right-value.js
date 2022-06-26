//Write a function, "bottomRightValue", that takes in the root of a binary tree. the function should return the right-most value in the bottom-most level of the tree.
//You may assume that the input tree is non-empty

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

const bottomRightValue = (root) => {
    //breadth first
    //declare a queue
    const queue = [root];
    //declare a var that will store the value of the current node, declare it outside of the while loop
    let current = null;

    while (queue.length > 0) {
        //reassign the value to the first element in the root array
        current = queue.shift();

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }

    return current.val
}

console.log(bottomRightValue(a))
