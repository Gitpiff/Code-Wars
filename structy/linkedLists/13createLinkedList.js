//Write a function, "createLinkedList", that takes in an array of values as an argument. The function should create a linked lost containing each element of the array as the values of the nodes. the function should return the head if the linked list.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//Iterative
// const createLinkedList = (values) => {
//     //use a dummy head
//     const dummyHead = new Node(null)
//     //create a tail pointer pointing to the dummy head
//     let tail = dummyHead;
//     //create a current pointer, iterating through the array using a for of loop
//     for (let val of values) {
//         //given an element of the array create a new node containing that element as a value and reassign the pointer of the dummy head to tail.next, linking the dummy head to the newly created first node
//         tail.next = new Node(val);
//         tail = tail.next
//     }


//     return dummyHead.next

// }

//Recursion 1
// const createLinkedList = (values) => {
//     if (values.length === 0) return null;
//     const head =  new Node(values[0]);
//     head.next = createLinkedList(values.slice(1));
//     return head;
// }

//Recursion 2
const createLinkedList = (values, i = 0) => {
    if (i === values.length) return null;
    const head =  new Node(values[i]);
    head.next = createLinkedList(values, i + 1);
    return head;
}



console.log(createLinkedList([1, 7, 1, 8]))
