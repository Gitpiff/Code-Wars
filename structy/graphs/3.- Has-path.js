//Write a function, "hasPath", that takes in an object representing the adjacency list of a directed acyclic graph and two nodes(src, dst). The function should return a boolean indicating whether or not there exists a direct path between the source and destination nodes.
//A cycle in a graph is some path through nodes where we can end up where we started. If we were to do a traversal, we'd get an infinite loop.

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

//solution 1, Recursive
// const hasPath = (graph, src, dst) => {
//     //base case
//     if (src === dst) return true;

//     //consider src neighbors
//     for (let neighbor of graph[src]) {
//         if (hasPath(graph, neighbor, dst) === true) return true;
//     }

//     //only after we've visited all of the nodes we return false if src !== dst
//     return false;
// }

//Solution 2, breadth first
const hasPath = (graph, src, dst) => {
    const queue = [ src ];

    while (queue.length > 0) {
        const current = queue.shift();
        if (current === dst) return true;

        for (let neigbor of graph[current]) {
            queue.push(neigbor);
        }
    }

    return false;
}

console.log(hasPath(graph, "f", "k"))