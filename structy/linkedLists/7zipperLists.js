//Write a function, "zipperLists", that takes in the head of two linked lists as arguments. The function should zipper
//the two lists together into a single linked list by alternating nodes. If one of the linked lists is longer than the
//other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered 
//linked list.
//Do this IN-PLACE by mutating the original nodes, you may assume that both input lists are non-empty.

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


//Iterative
const zipperLists = (head1, head2) => {
    //declare a variable that'll store the head of the modified list, this wil
    let tail = head1;
    //we'll need two pointers, one for each list
    let current1 = head1.next;
    let current2 = head2;
    //To create an alternate algorithm, we can use a count variable, if the num is odd insert listA.val, if even listB.value
    let count = 0;

    while(current1 !== null && current2 !== null) {
        if(count % 2 === 0) {
            tail.next = current2;
            current2 = current2.next
        } else {
            tail.next = current1;
            current1 = current1.next;
        }
        tail = tail.next;
        count += 1;
    }

    if(current1 !== null) tail.next = current1;
    if(current2 !== null) tail.next = current2

    return head1
}


//Recursive
// const zipperLists = (head1, head2) => {
//     if (head1 === null && head2 === null) return null;
//     if (head1 === null) return head2;
//     if (head2 === null) return head1;

//     const next1 = head1.next;
//     const next2 = head2.next;
//     head1.next = head2;

//     head2.next = zipperLists(next1, next2);
    
//     return head1
// }

console.log(zipperLists(a, u))