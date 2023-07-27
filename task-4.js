function twoSum(arr, target) {
  // initialize two pointers to point at the start and end of the array
  let left = 0;
  let right = arr.length - 1;
  // loop until the pointers meet
  while (left < right) {
    // calculate the sum of the numbers at the pointers
    let sum = arr[left] + arr[right];
    // check if the sum is equal to the target
    if (sum === target) {
      // return an array containing the indices of the numbers
      return [left, right];
    }
    // if the sum is too small, move the left pointer to the right
    else if (sum < target) {
      left++;
    }
    // if the sum is too large, move the right pointer to the left
    else {
      right--;
    }
  }
  // if no pair is found, return an empty array
  return [];
}
