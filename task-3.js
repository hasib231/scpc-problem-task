function mostFrequent(arr) {
  // initialize an empty object to store the frequency of each element
  let frequency = {};
  // initialize a variable to store the most frequent element
  let mostFrequent = null;
  // initialize a variable to store the highest frequency
  let maxFrequency = 0;
  // loop through the array
  for (let element of arr) {
    // increment the frequency of the element in the object
    frequency[element] = (frequency[element] || 0) + 1;
    // check if the frequency of the element is higher than the max frequency
    if (frequency[element] > maxFrequency) {
      // update the max frequency
      maxFrequency = frequency[element];
      // update the most frequent element
      mostFrequent = element;
    }
  }
  // return the most frequent element
  return mostFrequent;
}
