//Write a function, "linkedListFind", that takes in the head of a linked list and a target value. the function should return a boolean indicating whether or not the linked list contains the target.

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
// const linkedListFind = (head, target) => {
//     //pointer
//     //iterate through list, compare each value in each iteration
//     let current = head;

//     while(current !== null){
//         if(current.val === target){
//             return true
//         } else if(current.val !== target || current.val === null){
//             return false
//         }
//         current = current.next
//     }
// }


//Iterative Solution
const linkedListFind = (head, target) => {
    //pointer
    //iterate through list, compare each value in each iteration
    let current = head;

    while(current !== null){
        if(current.val === target){
            return true
        }
        current = current.next
    }

    return false

}

//Recursive Solution
// const linkedListFind = (head, target) => {
//     //need two cases, one affirmative and one that returns false
//     if(head == null) return false;
//     if(head.val === target) return true;
//     return linkedListFind(head.next, target)
// }


console.log(linkedListFind(a, "Z"))
