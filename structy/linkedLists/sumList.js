//Write a function, "sumList", that takes in the head of a linked list containing numbers as an argument, The function should return the total sum of all values in the linked list.


//Iterative
const sumList = (head) => {
    let sum = 0;
    let current = head;
    while(current !== null) {
        sum += current.val;
    }

    return sum
}

//n = number of nodes
//Time: O(n)
//Space: O(1)


//Recursive
const sumList = (head) => {
    if(head === null) return 0;
    return head.val + sumList(head.next);
}

//n = number of nodes
//Time: O(n)
//Space: O(n)

console.log(sumList())
