//Write a function, "largestComponent", that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.

const largestComponent = (graph) => {
    //avoid cycles
    const visited = new Set();
    //we need a variable that will act as a placeholder for the longest component
    let longest = 0;
    //start a traversal on disconnected component
    //iterate through every node of the graph
    for (let node in graph) {
        //helper function to traverse and return the maxSize
        const maxSize = exploreSize(graph, node, visited);
        //conditional
        if (maxSize > longest) longest = maxSize;
    }

    return longest;
}

//helper function to get the maxSize
const exploreSize = (graph, node, visited) => {
    //if a node has been visited, do not double count it, return 0
    if (visited.has(node)) return 0;
    //if the current node has not been visited, add it to the set
    visited.add(node);
    //create a variable to act as our current num, if the first conditional was not triggered, we know the size of the current component is at least 1
    let size = 1;
    //make the recursive call in the neighbor nodes
    for (let neighbor of graph[node]) {
        size += exploreSize(graph, neighbor, visited)
    }

    return size;
}

console.log(largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
  }));