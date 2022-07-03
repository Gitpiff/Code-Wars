//Write a function, "hasPath", that takes in an object representing the adjacency list of a directed acyclic graph and two nodes(src, dst). The function should return a boolean indicating whether or not there exists a direct path between the source and destination nodes.

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

const hasPath = (graph, src, dst) => {

}

console.log(hasPath(graph, "f", "k"))