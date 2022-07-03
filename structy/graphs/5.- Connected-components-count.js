//Write a function, "connectedComponentsCount", that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.

connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
});

const connectedComponentsCount = (connectedComponentsCount) => {
    //we'll need iterative code to hop between components and we'll need some traversal code to explore single components as far as possible
    //start with a count variable, start traversing, if the node is not visited, add 1 to the count, if the node has been visited, move onto the next node
    //create a set to keep there all of nodes visited, to avoid inifinite loops

}

console.log(connectedComponentsCount())
