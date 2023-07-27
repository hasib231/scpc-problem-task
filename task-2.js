function sumPositive(arr) {
  // initialize a variable to store the sum
  let sum = 0;
  // loop through the array
  for (let num of arr) {
    // check if the number is positive
    if (num > 0) {
      // add it to the sum
      sum += num;
    }
  }
  // return the sum
  return sum;
}
