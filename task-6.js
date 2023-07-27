function generatePassword(length) {
  // define the possible characters for the password
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  // initialize an empty string to store the password
  let password = "";
  // loop for the specified length
  for (let i = 0; i < length; i++) {
    // generate a random index from 0 to the length of the characters string
    let index = Math.floor(Math.random() * characters.length);
    // append a random character from the characters string to the password
    password += characters[index];
  }
  // return the password
  return password;
}
