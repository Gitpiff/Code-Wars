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
const b = new Node ("B");
const c = new Node ("C");
const d = new Node ("D");
const e = new Node ("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;


//Iterative Solution
const removeNode = (head, target) => {
    //In the case of deleting the first node of the list, we need to do it so explicitly
    if (head.val === target) return head.next;
    //reroute the node that's pointing to the target, to make it point to the node target.next
    //we'll need two pointers, one to track the current head, and another one to track the previous value
    //Declare a current head
    let current = head;
    //previous head.val
    let prev = null;
    //check if the current.val === target, then we need to point prev to current.next, skipping the current node
    while (current !== null) {
        if(current.val === target) {
            prev.next = current.next
            break;
        }

        prev = current;
        current = current.next;
    }

    return head
}

//Time: O(n)
//Space: O(1)


//Recursive Solution
// const removeNode = (head, target) => {
//     if (head === null) return null;
//     if (head.val === target) return head.next;
//     head.next = removeNode (head.next, target);
//     return head
// }

console.log(removeNode(a, "A"))
