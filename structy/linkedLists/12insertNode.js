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
    //need a variable to act as an index pointer, another var to act as the current value,  also a while loop, with each iteration this var will += 1 incrementing the index num to the next value
    //if the index -1 === count var, we'll insert a new node by directing the prev node to the new one, and the new one to the current.next.next
    //we do index -1 because we need to stop a value before the index === count to insert the new node
    let count = 0;
    let current = head;

    while (current !== null) {
        if (count === index - 1) {
            const temp = current.next;
            current.next = new Node(value);
            current.next.next = temp;
        }

        count += 1
        current = current.next
    }

    return current


}

console.log(insertNode(a, "V", 1))
