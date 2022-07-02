//Print the values of the given graph according to the depth first traversal method

const graph = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: []

}

//Solution 1, Iterative
// const depthFistPrint = (graph, source) => {
//     //depth traversal uses a stack
//     const stack =[ source ];

//     //run the loop while the stack is not empty
//     while (stack.length > 0) {
//         //set the current value
//         const current = stack.pop();
//         console.log(current);
//         //iterate through the neigbors of the current value
//         for (let neigbor of graph[current]) {
//             //push the neighbors to the top of the stack
//             stack.push(neigbor)
//         }
//     }

// };

//Solution 2, Recursive
const depthFistPrint = (graph, source) => {
   //the source node is the first node, so we can print it first
   console.log(source)
    //iterate through the current node's neighbors
   for (let neighbor of graph[source]) {
       depthFistPrint(graph, neighbor)
   }

};

console.log(depthFistPrint(graph, "a"))