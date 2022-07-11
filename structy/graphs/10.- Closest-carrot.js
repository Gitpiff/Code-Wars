// Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column. In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots. The function should return a number representing the length of the shortest path from the starting position to a carrot. You may move up, down, left, or right, but cannot pass through walls (X). If there is no possible path to a carrot, then return -1.

const closestCarrot = (grid, startRow, startCol) => {
    //use a breadth first traversal
    //start the queue at the starting point, also store the distance from the values stored in the queue to the starting point
    const queue = [ [startRow, startCol, 0] ];
    //prevent infinite loops
    //make sure to make the set strings and to include the comma, to have disctintcion between row and column
    const visited = new Set([ startRow + ',' + startCol ]);
    
    //while the queue is not empty keep iterating
    while (queue.length > 0) {
        //deconstruct the elements that we get from the first element on the queue
        const [ row, col, distance ] = queue.shift();
        //check if the position being iterated is a carrot, if it is return the distance
        if (grid[row][col] === 'C') return distance;
        
        //store the neighbors in a var
        const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        //iterate through the neighbors
        for (let delta of deltas)  {
            //"unpack" the elements obtained from the current delta
            const [deltaRow, deltaCol] = delta;
            //add the neighbor row and column
            const neighborRow = row + deltaRow;
            const neighborCol = col + deltaCol;
            //current neighbor position
            const neighborPos = neighborRow + ',' + neighborCol;
            //check if the neighbors are inbound
            const rowInbounds = 0 <= neighborRow && neighborRow < grid.length;
            const colInbounds = 0 <= neighborCol && neighborCol < grid[0].length;
        //check if the neighbors are inbound, has not been visited and is not equal to X which represents a wall    
        if (rowInbounds && colInbounds && !visited.has(neighborPos) && grid[neighborRow][neighborCol] !== 'X') {
            //if all the conditionals are met, add the neighborPos to the set
            visited.add(neighborPos);
            //also push the row, column and the distance + 1 to the set
            queue.push([ neighborRow, neighborCol, distance + 1 ]);
      }
    }
  }
  

  //if no path can be found, return -1
  return -1;

};

const grid = [
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'X', 'O', 'O', 'O'],
    ['O', 'X', 'X', 'O', 'O'],
    ['O', 'X', 'C', 'O', 'O'],
    ['O', 'X', 'X', 'O', 'O'],
    ['C', 'O', 'O', 'O', 'O'],
];

console.log(closestCarrot(grid, 0, 0))

