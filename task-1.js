function reverseString(str) {
  // initialize an empty string to store the reversed characters
  let reversed = "";
  // loop through the original string from the end to the beginning
  for (let i = str.length - 1; i >= 0; i--) {
    // append each character to the reversed string
    reversed += str[i];
  }
  // return the reversed string
  return reversed;
}


