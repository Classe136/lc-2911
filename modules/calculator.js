function sum(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

const fullnameObj = (firstName, lastName) => ({
  firstName: firstName,
  lastName: lastName,
});

// module.exports = {
//     sum : sum,
//     subtract: subtract,
//     multiply: multiply,
//     divide: divide
// }

module.exports = {
  sum,
  subtract,
  multiply,
  divide,
  fullnameObj,
};
