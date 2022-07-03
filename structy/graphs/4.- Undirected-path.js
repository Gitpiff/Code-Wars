//Write a function, "undirectedPath", that takes in an array of edges for an undirected graph and two nodes(nodeA, nodeB). The function should return a boolean indicating whether or not there exist a path between nodeA and nodeB.

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

const undirectedPath = (edges, nodeA, nodeB) => {
    //first we need to convert our edges to an adjencency list, use a helper function to do this
    const graph = buildGraph(edges);
    console.log(graph);
    //we need another helper function to determine if a path exists between nodeA and nodeB
    //use a set to avoid infinite loops in case there's a cycle
    return hasPath(graph, nodeA, nodeB, new Set());
}

//hasPath helper function
const hasPath = (graph, source, destination, visited) => {
    //base case
    if (source === destination) return true;
    //to avoid infinite recursion
    if (visited.has(source)) return false;
    //this expression adds source to the visited set
    visited.add(source);

    for (let neigbor of graph[source]){
        if (hasPath(graph, neigbor, destination, visited) === true) return true;
    }

    return false;
}

//buildGraph helper function
const buildGraph = (edges) => {
    //an adjacent list is an object with key-value pair elements in it
    const graph = {};

    //iterate through every edge, we know every edge contains a pair of nodes
    for (let edge of edges) {
        //deconstruct both nodes composinng an edge
        const [a, b] = edge;
        //initialize these nodes as keys containing an empty array of the graph object if they don't exist
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        //add their neighbors
        graph[a].push(b);
        graph[b].push(a);
    }


    return graph;
}

console.log(undirectedPath(edges, "j", "m"))
  