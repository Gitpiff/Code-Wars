//Write a function, "longesPath" that takes in an adjancency list for a directed acyclic graph. The function should return the length of the longest path within the graph. A path may start and end at any two nodes. The lenght of a path is considered the number of edges in the path not the number of nodes.

const longesPath = (graph) => {
  //depth first recursive
  //initialize a hash map -object- for the distances
  const distance ={};
  //find the terminal nodes of our graph -nodes that do not have edges, endpoints-
  //iterate through the graph
  for (let node of graph) {
    //if the key value pair obtained from graph[node] does not exist, initialize it in the hash map
    if (graph[node].length === 0) {
      distance[node] = 0;``
    }
  };

  //depth first traversal, beginning in every potential starting node
  for (let node in graph) {
    //helper function to do the depth first recursion
    traverseDistance(graph, node, distance);
  };

  Math.max(...Object.values(distance));

};

//helper function -return a number representing the max distance from a given node-
const traverseDistance = (graph, node, distance) => {
  //base case, hit a terminal node or a node that has been previously visited
  if (node in distance) return distance[node];
  let maxLength = 0;
  //iterate through the neighbors
  for (let neighbor of graph[node]) {
    const attempt = traverseDistance(graph, neighbor, distance);
    if (attempt > maxLength) maxLength = attempt;
  }

  distance[node] = 1 + maxLength;
  return distance[node];
}

const graph = {
    a: ['c', 'b'],
    b: ['c'],
    c: []
  };


console.log(longesPath(graph))
