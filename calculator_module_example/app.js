const calculator = require("./calculator");

console.log(calculator);

let addTenAndTwelve = calculator.addTwoNumbers(10, 12);
console.log(`the result is ${addTenAndTwelve}`);

let division = calculator.divideTwoNumbers(420, 12);
console.log(`the result is ${division}`);

let subtraction = calculator.subtractTwoNumbers(18, 12);
console.log(`the result is ${subtraction}`);

let multiplication = calculator.multiplyTwoNumbers(420, 12);
console.log(`the result is ${multiplication}`);
