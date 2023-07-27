function calculator(num1, num2, operator) {
  // use a switch statement to handle different operators
  switch (operator) {
    // if the operator is "+", return the sum of the numbers
    case "+":
      return num1 + num2;
    // if the operator is "-", return the difference of the numbers
    case "-":
      return num1 - num2;
    // if the operator is "*", return the product of the numbers
    case "*":
      return num1 * num2;
    // if the operator is "/", return the quotient of the numbers
    case "/":
      // check if the second number is zero to avoid division by zero error
      if (num2 === 0) {
        // return an error message
        return "Cannot divide by zero";
      } else {
        // return the quotient
        return num1 / num2;
      }
    // if the operator is not valid, return an error message
    default:
      return "Invalid operator";
  }
}
