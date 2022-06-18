//Write a function, "isUnivalueList", that takes un the head of a linked list as an argument. The function should return a boolean indicating whether ot not the linked list contains exactly one unique value.
//You may assume that the input list is non-empty.

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
// const isUnivalueList = (head) => {
//     //declare one pointer
//     let current =  head;
//     //iterate through the list, using a while loop
//     while (current !== null) {
//         //check the value of current
//         if(current.val !== head.val) {
//             return false
//         }
//         current = current.next;
//     }

//     return true
// }

//Time: O(n)
//Space: O(1)


//Recursive
const isUnivalueList = (head, prevVal = null) => {
    if(head === null) return true;
    if(prevVal === null || prevVal === head.val) {
        return isUnivalueList(head.next, head.val);
    } else {
        return false
    }
}

//Time: O(n)
//Space: O(n)



console.log(isUnivalueList(a))
