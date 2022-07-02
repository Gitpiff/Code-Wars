//Print the values of the given graph according to the depth first traversal method

const graph = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: []

}

//the only way of solving a graph using the breadth first traversal method is to do it Iteratively
const breadthFirst = (graph, sourceNode) => {
    //we'll need a queue
    const queue = [sourceNode];
    //iterate through the queue
    while (queue.length > 0) {
        //get the current value
        const current = queue.shift();
        console.log(current);
        //iterate through the neighbor nodes and push them to the end of the array
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }

}

console.log(breadthFirst(graph, "a"))