//Write a function, "addLists", that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input list are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.

class node {
    constructor(val) {
        this.val = val;
        this.next = next;
    }
}

const a = new Node (1);
const b = new Node (2);
const c = new Node (3);
const d = new Node (4);
const e = new Node (5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const u = new Node (6);
const v = new Node (7);
const w = new Node (8);
const x = new Node (9);
const y = new Node (10);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

const addLists = (head1, head2) => {

}

console.log(addLists(a, b))
