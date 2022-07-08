//Write a function, "islandCount", that takes in a grid containing Ws and Ls. W represents water and L represents Land. The function shoudl return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

const islandCount = (grid) => {
    //the positions -coordinates- of the graph will act like nodes
    //avoid inifinte loops, use a set
    const visited = new Set();
    //set a count var
    let count = 0;
    //start with a loop to iterate through every position in the graph, we're looking for rows and columns
    for (let r = 0; r < grid.length; r += 1){
        for (let c = 0; c < grid[0].length; c += 1){
            //invoke a helper function to do the traversal and check if the return of the helper call is true, add 1 to the count
            if (explore(grid, r, c, visited) === true) {
                count += 1;
            }
        }
    }

    return count;
}

//helper function
const explore = (grid, r, c, visited) => {
    //make sure our positions are inbounds
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    if (!rowInbounds || !colInbounds) return false;
    //if the position is water, return false
    if (grid[r][c] === "W") return false; 
    //create a stringyfied version of the position
    //we suse a commma because we need to set different bounds for c and r
    const position = r + "," + c;
    //check if the island has been visited
    if (visited.has(position)) return false;
    visited.add(position);

    //if we want to go above in the grid, r -1
    explore(grid, r - 1, c, visited); //up
    explore(grid, r + 1, c, visited); //down
    explore(grid, r, c -1, visited); //left
    explore(grid, r, c + 1, visited); //right

    return true; //we found a new island
}

const grid = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
  ];

console.log(islandCount(grid))