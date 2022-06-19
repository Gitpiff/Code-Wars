//Write a function, "removeNode", that takes in the head of a linked list and a target value as arguments. The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list.
//Do this IN-PLACE, you may assume that the input list is non-empty.
//You may assume that the input list contains the target

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const a = new Node ("A");
const b = new Node ("C");
const c = new Node ("C");
const d = new Node ("C");
const e = new Node ("C");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const removeNode = (head, target) => {

}

console.log(removeNode(a, "C"))
