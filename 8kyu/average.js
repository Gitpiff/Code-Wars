//Find the average num of an array

function average(array) {
    let arraySum = sum(array);
    return arraySum / array.length;
  };

  console.log(average([1,2,3]))