//Write a function, "islandCount", that takes in a grid containing Ws and Ls. W represents water and L represents Land. The function shoudl return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

const islandCount = (grid) => {
    //the positions -coordinates- of the graph will act like nodes
    //avoid inifinte loops, use a set
    const visited = new Set();
    //start with a loop to iterate through every position in the graph, we're looking for rows and columns
    for (let r = 0; r < grid.length; r += 1){
        for (let c = 0; c < grid[0].length; c += 1){
            //invoke a helper function to do the traversal
            explore(grid, c, r, visited);
        }
    }


}

//helper function
const explore = (grid, c, r, visited) => {
    //make sure our positions are inbounds
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid.length;
    if (!rowInbounds || !colInbounds) return false;
    //if the position is water, return false
    if (grid[r][c] === "W") return false; 
    //create a stringyfied version of the position
    //we suse a commma because we need to set different bounds for c and r
    const position = r + "," + c;
    //check if the island has been visited
    if (visited.has(pos)) return false;
    visited.add(pos);
}

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];
  

console.log(islandCount(grid))