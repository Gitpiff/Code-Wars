//Find the average num of an array

function average(array) {
    if(!array || array.length === 0) {
      return 0
    }
    let arraySum = array.reduce((acc, c) => acc + c, 0)
    return arraySum / array.length
  };

  console.log(average([]))