//Write a function "mergeLists", that takes in the head of two sorted linked lists as arguments. The function should merge the two lists together into single sorted linked list. Thw function should return the head of the merged linked list.
//Do this IN-PLACE, by mutating the original nodes.
//You may assume that both input lists are non-empty and contain increasing sorted numbers.

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

const u = new Node ("U");
const v = new Node ("V");
const w = new Node ("W");
const x = new Node ("X");
const y = new Node ("Y");

u.next = v;
v.next = w;
w.next = x;
x.next = y;

const mergeLists = (head1, head2) => {
    //need current pointers for both lists
    //We need to find out first which head contains the smallest value, so we can use it as our starting point
    

}

console.log(mergeLists(a, u))
