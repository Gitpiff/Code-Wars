//Write a function, "longestStreak", that takes in the head of a linked list as an argument. The function should return
//the length of the longest consecutive streak of the same value within the list.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const a = new Node ("A");
const b = new Node ("A");
const c = new Node ("A");
const d = new Node ("A");
const e = new Node ("A");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const longestStreak = (head) => {
    //Declare a current pointer
    let current = head;
    //Declare a count
    let count = 0;
    //Iterate -while loop-
    while (current !== null) {
        if(current.val === head.val) {
            count += 1;
        }
        current = current.next;
    }
    //conditional, if current.val === head.val count += 1
    //else return count

    return count
}

console.log(longestStreak(a))