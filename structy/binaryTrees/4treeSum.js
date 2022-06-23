//Write a function, "treeSum", that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.

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

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

const treeSum = (root) => {
    //if the tree is empty, return an empty array
    if (root === null) return [];
    //create a count var
    let count = 0;
    //create a stack
    const stack = [root];
    //iterate
    while (stack.length > 0) {
        //gets the current node
        const current = stack.pop();
        count += current.val;

        if (current.left !== null) stack.push(current.left);
        if (current.right !== null) stack.push(current.right);
    }

    return count;
}

console.log(treeSum(a))
