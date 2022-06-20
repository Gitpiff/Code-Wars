//Write a function, "insertNode", that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.
//Do this IN-PLACE, you may assume that the input list is non-empty and the index is not greater than the length of the input list

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

const insertNode = (head, value, index) => {

}

console.log(insertNode(a, "V", 1))
