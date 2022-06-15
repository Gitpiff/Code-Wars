//Write a function "reverseList", that takes in the head of a linked list as an argument. The function should reverse
//the order of the nodes in the linked list IN-PLACE and return the new head of the reversed linked list.

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

//Solution 1 -Iterative-
const reverseList = (head) => {
    //pointer to iterate head.val until head === null
    let current = head;
    //pointer that holds the previous value
    let prev = null;
    //loop, 
    while(current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev
}

//Solution 2 -Recursive-
// const reverseList = (head, prev = null) => {
//     if(head === null) return prev;
//     const next = head.next;
//     head.next = prev;
//     return reverseList(next, head)
// }

console.log(reverseList(a))