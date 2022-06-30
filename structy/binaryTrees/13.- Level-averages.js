//Write a function, "levelAverages", that takes in the root of a binary tree that contains number values. The function should return an array containing the average value of each level.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

const levelAverages = (root) => {
    //create a levels array to store each level with it's elements
    const levels = [];
    //call the level helper function
    fillLevels(root, levels, 0);
    //loop through the levels array, then call the average helper function, and push the result into the averages array
    return levels.map(getAverage)

}
//helper function that will find us every level in the tree
const fillLevels = (root, levels, levelNum) => {
    //base case
    if (root === null) return;

    if (levels.length === levelNum) {
        levels.push([root.val])
    } else {
        levels[levelNum].push(root.val);
    }
    //add one to the child nodes -example; if parent node is at level 0, it's child would be at level 1-
    fillLevels(root.left, levels, levelNum + 1);
    fillLevels(root.right, levels, levelNum + 1);
}

//helper function to find the average
const getAverage = (array) => {
    let sum = 0;

    for (let num of array) {
        sum += num;
    }

    return sum / array.length;
}


console.log(levelAverages(a))
