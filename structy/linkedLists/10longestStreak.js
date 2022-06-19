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
    //Declare a current streak var
    let currentStreak = 0;
    //check for values that are the same, declare a var that will store the previous value, declare it as an empty var
    let prevVal = "";
    // //Declare a pointer that will point at the current head of the list
    let current = head;

    //Iterate -while loop-, assign the first value of the list's head to be the value of prevVal
    while (current !== null) {
        prevVal = current.val;
        if(head.val === prevVal) {
            currentStreak += 1;
        }
        current = current.next
    }

    if (currentStreak > maxStreak) {
        maxStreak = currentStreak
    }
    //add 1 to the current-streak, also we need a conditional if the current streak is greater than the max-streak then we'll reassign the value of the current streak to the max streak

    return maxStreak
}

console.log(longestStreak(a))
