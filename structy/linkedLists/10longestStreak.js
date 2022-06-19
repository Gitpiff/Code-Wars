//Write a function, "longestStreak", that takes in the head of a linked list as an argument. The function should return
//the length of the longest consecutive streak of the same value within the list.

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

const longestStreak = (head) => {
    //Declare a Max streak variable
    let maxStreak = 0;
    //Declare a current streak var -track current streak-
    let currentStreak = 0;
    //check for values that are the same, declare a var that will store the previous value, declare it as an empty var -track last value-
    let prevVal = null;
    // //Declare a pointer that will point at the current head of the list
    let current = head;

    //Iterate -while loop-, assign the first value of the list's head to be the value of prevVal
    while (current !== null) {
        if(current.val === prevVal) {
            currentStreak += 1;
        } else {
            currentStreak = 1 //starts a new streak at 1
        }

        if (currentStreak > maxStreak) {
            maxStreak = currentStreak
        }

        prevVal = current.val;
        current = current.next
    }

    return maxStreak
}

console.log(longestStreak(a))
