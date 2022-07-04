//Write a function, "connectedComponentsCount", that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.


const connectedComponentsCount = (graph) => {
    //avoid infinite loops by declaring a set globally, JS sets offer O(1) lookup and  O(1)addition
    const visited = new Set(); 
    //start with a count variable, start traversing, if the node is not visited, add 1 to the count, if the node has been visited, move onto the next node
   let count = 0;
    //we'll need iterative code to hop between components and we'll need some traversal code to explore single components as far as possible.
    //begin a travesal at every potential node
    for (let node in graph) {
        console.log(visited);
        //we'll need a helper function to do the traversing
        if (explore(graph, node, visited) === true ) {
            count += 1
        }
    }
    
    return count;
}

//helper function to traverse -recursively-
const explore = (graph, current, visited) => {
    //avoid cycles
    if (visited.has(String(current))) return false;
    //if node has not been visited, add it to the set
    visited.add(String(current));
    //iterate through every neighbor
    for (let neigbor of graph[current]) {
        explore(graph, neigbor, visited)
    }
    //it wont return true until ALL the neighbors have been visited
    return true;
};

console.log(connectedComponentsCount({
    1: [2],
    2: [1,8],
    6: [7],
    9: [8],
    7: [6, 8],
    8: [9, 7, 2]
  }));

