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

const isUnivalueList = (head) => {
    //declare one pointer
    let current =  head;
    //iterate through the list, using a while loop
    while (current !== null) {
        //check the value of current
        if(current.val === current.next.val) {
            return true
        }
        current = current.next;
    }

}


console.log(isUnivalueList(a))
