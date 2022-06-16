//Write a function, "mergeLists", that takes in the head of two sorted linked lists as arguments. The function should
//merge the two lists together into a single sorted linked list.
//Do this IN-PLACE by mutating the original Nodes.
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
    let dummyHead = new Node(null);
    let tail = dummyHead;
    let current1 = head1;
    let current2 = head2;

    while (current1 !== null && current2 !== null) {
        if (current1.val < current2.val) {
            tail.next = current1;
            current1 = current1.next;
        } else {
            tail.next = current2;
            current2 = current2.next;
        }

        tail = tail.next
    }

    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;

    return dummyHead.next

}


console.log(mergeLists(a, u))