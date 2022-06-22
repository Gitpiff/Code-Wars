//Write a function, "addLists", that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input list are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const u = new Node(6);
const v = new Node(7);
const w = new Node(8);
const x = new Node(9);
const y = new Node(10);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

//Iterative Solution
const addLists = (head1, head2) => {
    const dummyHead = null;
    let tail = dummyHead;
    let carry = 0;
    let current1 = head1;
    let current2 = head2;

    while (current1 !== null || current2 !== null || carry === 1) {
        const val1 = head1 === null ? 0 : head1.val;
        const val2 = head2 === null ? 0 : head2.val;
        const sum = val1 + val2 + carry;
        carry = sum > 9 ? 1 : 0;
        const digit = sum % 10;

        if (current1 !== null) current1 = current1.next;
        if (current2 !== null) current2 = current2.next;

        tail.next = new Node(digit);
        tail = tail.next;
    }

    return dummyHead.next;
}





//Recursive Solution
// const addLists = (head1, head2, carry = 0) => {
//     if (head1 === null && head2 === null && carry === 0) return null;

//     const val1 = head1 === null ? 0 : head1.val;
//     const val2 = head2 === null ? 0 : head2.val;

//     const sum = val1 + val2 + carry;
//     const nextCarry = sum > 9 ? 1 : 0;
//     const digit = sum % 10;
//     const result = new Node(digit);

//     const next1 = head1 === null ? null : head1.next
//     const next2 = head2 === null ? null : head2.next

//     result.next = addLists(next1, next2, nextCarry);

//     return result;
//}

console.log(addLists(a, u))
