//Write a function, "breadthFirstValues", that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order -from top to bottom-

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

const breadthFirstValues = (root) => {

}

console.log(breadthFirstValues(a))
