//Write a function, "linkedListValues" that takes in the head of a linked list as an argument, 
//the function should return an array containing all values of the nodes in the linked list


//Iterative Solution
const linkedListValues = (head) => {
    const values = [];
    let current = head;
    while(current !== head) {
        values.push(current.val);
        current = current.next;
    }

    return values
}


//Recursive Solution
const linkedListValues = (head) => {
    const values = [];
    _linkedListValues(head, values);
    return values;
}

const linkedListValues = (head, values) => {
    if(head === null) return;
    values.push(head.val);
    _linkedListValues(head.next, values)
}

console.log(linkedListValues)