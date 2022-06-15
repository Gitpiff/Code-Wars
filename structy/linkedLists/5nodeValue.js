//Write a function, "getNodeValue", that takes un the head of a linked list and an index. The function should return the value of the linked list at the specified index.
//If there is no node at the given index, then return null.

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


//Solution 1
const getNodeValue = (head, index) => {
    //pointer to see head's value
    let current = head;
    //counter to keep track of the index
    let count = 0;
    //loop
    while(current !== null){
        if(index === count){
            return current.val
        }
        count += 1
        current = current.next
    }

    return null
}

// n = number of nodes
// Time: O(n)
// Space: O(1)




//Recursive
// const getNodeValue = (head, index) => {
//     if(head === null) return null;
//     if(index === 0) return head.val;
//     return getNodeValue(head.next, index -1);
// }

// n = number of nodes
// Time: O(n)
// Space: O(n)


console.log(getNodeValue(a, 4))
