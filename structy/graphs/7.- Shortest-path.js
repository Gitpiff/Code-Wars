//Write a function, "shortestPath", that takes in an array of edges for an undirected path and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there's no path between A and B, then return -1.

const shortestPath = (edges, nodeA, nodeB) => {
    //convert edge list into adjacency list by using a helper function
    const graph = buildGraph(edges);
    //create a set to prevent infinite loops, since we are starting the queue at nodeA, we must start the set at the same node to mark it as visited
    const visited = new Set([nodeA])
    //work the breadth first logic
    //start by declaring your queue, not only store the nodes, but also the distance from nodeA to nodeB
    //we initialize the queue at nodeA, and the num 0, because nodeA is 0 edges away from itself, that 0 will be incremented as soon as we start finding edges
    const queue = [ [nodeA, 0]];

    //breadth first, remove always from the top FIFO
    while (queue.length > 0) {
        //deconstruct, get the node and the distance from the shifted value
        const [node, distance] = queue.shift();

        //check the node that was just removed from the queue
        //if nodeA === nodeB then the distance is 0
        if(node === nodeB) return distance;
        //iterate through the graph at the current node
        for (let neighbor of graph[node]) {
            //only add the neighbor to the queue if it has not been visited
            if(!visited.has(neighbor)) {
                //if it hasn't been "visited", add it to the set
                visited.add(neighbor);
                //add the neighbors into the queue, also add one to the distance, sice we add one node, there must be an edge to connect it with it's neighbor
                queue.push( [neighbor, distance + 1] );
            }
        }
    }
    
    return -1;
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
        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];

console.log(shortestPath(edges, 'w', 'z'))