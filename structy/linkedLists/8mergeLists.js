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

//Iterative Solution
const mergeLists = (head1, head2) => {
    //create a dummy head, assign it's value to null
    let dummyHead = new Node(null);
    //declare a "tail" pointer
    let tail = dummyHead;
    //declare pointers for both lists
    let current1 = head1;
    let current2 = head2;
    //Iterate while both pointers are not null
    while (current1 !== null && current2 !== null) {
        //check the values & declare conditionals in a way that the resulting list values are in an increasing order
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

//Recursive Solution'
// const mergeLists = (head1, head2) => {
//     if (head1 === null && head2 === null) return null;
//     if (head1 === null) return head2;
//     if (head2 === null) return head1;
//     if ( head1.val < head2.val) {
//         const next1 = head1.next
//         head1.next = mergeLists(next1, head2);
//         return head1;
//     } else {
//         const next2 = head2.next;
//         head2.next = mergeLists(head1, next2);
//         return head2
//     }
// }

console.log(mergeLists(a, u))
