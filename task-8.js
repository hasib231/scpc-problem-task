function secondSmallest(arr) {
  // initialize two variables to store the smallest and second smallest numbers
  let smallest = Infinity;
  let secondSmallest = Infinity;
  // loop through the array
  for (let num of arr) {
    // check if the number is smaller than the smallest number
    if (num < smallest) {
      // update the second smallest number to be the previous smallest number
      secondSmallest = smallest;
      // update the smallest number to be the current number
      smallest = num;
    }
    // otherwise, check if the number is smaller than the second smallest number
    else if (num < secondSmallest) {
      // update the second smallest number to be the current number
      secondSmallest = num;
    }
  }
  // return the second smallest number
  return secondSmallest;
}
