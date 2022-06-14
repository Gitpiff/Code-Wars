//Write a function, "linkedListValues" that takes in the head of a linked list as an argument,
//the function should return an array containing all values of the nodes in the linked list

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node ("A");
const b = new Node ("B");
const c = new Node ("C");
const d = new Node ("D");
const e = new Node ("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

//Iterative Solution
// const linkedListValues = (head) => {
//     //declare a variable containing the array expected as the result
//     const values = [];
//     //use a pointer to traverse in order
//     let current = head;
//     //check conditional
//     while(current !== null) {
//         //if conditional is met, push value to array
//         values.push(current.val);
//         //move the "pointer" to the next value
//         current = current.next;
//     }
//     //
//     return values
// }


//Recursive Solution
const linkedListValues = (head) => {
    const values = [];
    fillValues(head, values);
    return values;
}

const fillValues = (head, values) => {
    if(head === null) return;
    values.push(head.val);
    fillValues(head.next, values)
}

console.log(linkedListValues)
