//Write a function, "sumList", that takes in the head of a linked list containing numbers as an argument, The function should return the total sum of all values in the linked list.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node (2);
const b = new Node (8);
const c = new Node (3);
const d = new Node (-1);
const e = new Node (7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;



//Iterative
// const sumList = (head) => {
//     //declare a variable result, initial value null
//     let result = 0;
//     //pointer to get each node's value
//     let current = head;
//     //add value to the result variable
//     //iterate using a while loop
//     while(current !== null) {
//       result += current.val;
//       current = current.next
//     }

//     return result
//   };

// //n = number of nodes
// //Time: O(n)
// //Space: O(1)


// //Recursive
const sumList = (head) => {
    if(head === null) return 0;
    return head.val + sumList(head.next);
}

// //n = number of nodes
// //Time: O(n)
// //Space: O(n)

console.log(sumList(a))
