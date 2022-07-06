//Write a function, "shortestPath", that takes in an array of edges for an undirected path and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there's no path between A and B, then return -1.

const shortestPath = (edges, nodeA, nodeB) => {
    //convert edge list into adjacency list by using a helper function
    const graph = buildGraph(edges);
    //work the breadth first logic
    //start by declaring your queue, not only store the nodes, but also the distance from nodeA to nodeB
    const queue = [ ]
    

}

//helper function to build graph
const buildGraph = (edges) => {
    const graph = {};

    //iterate through every edge
    for (let edge of edges) {
        //"upack" the nodes of every edge
        const [a, b] = edge;
        //if the node does not exist in the graph, initialize it
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        //we know a must be a neighbor of b, so we can push them into each other's arrays in the graph object
        graph[a].push(graph[b]);
        graph[b].push(graph[a]);
    }

    return graph;
}