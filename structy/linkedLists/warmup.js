//First node in a linked list is referred to as a "head", last node "tail"
//Ordered data structure
//Unlike an array, it's elements don't have to be stored contiguously



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

// A -> B -> C -> D -> E -> NULL

// const printLinkedList = (head) => {
//     let current = head;
//     while(current !== null) {
//         console.log(current.val);
//         current = current.next;   //After printing current make sure to actualize
//                                  // the position of current
//     }
// }

//Same function but written recursively -calling the function within itself makes it recursive-
const printLinkedList = (head) => {
    if (head === null) return;
    console.log(head.val);
    printLinkedList(head.next);
}


printLinkedList(a)
