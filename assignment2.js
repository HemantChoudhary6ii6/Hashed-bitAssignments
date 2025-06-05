// Question 1
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i); 
  }
}


// Question 2

function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : 'Cannot divide by zero';
    default:
      return 'Invalid operator';
  }
}



// Question 3

function findTax(salary) {
  let taxRate;

  switch (true) {
    case (salary > 0 && salary <= 500000):
      taxRate = 0;
      break;
    case (salary > 500000 && salary <= 1000000):
      taxRate = 0.10;
      break;
    case (salary > 1000000 && salary <= 1500000):
      taxRate = 0.20;
      break;
    case (salary > 1500000):
      taxRate = 0.30;
      break;
    default:
      return 'Invalid salary input';
  }

  return salary * taxRate;
}


// Question 4
function sumOfDigitProducts(n1, n2) {
  let str1 = n1.toString().split('').reverse();
  let str2 = n2.toString().split('').reverse();
  let maxLength = Math.max(str1.length, str2.length);
  let sum = 0;

  for (let i = 0; i < maxLength; i++) {
    let digit1 = parseInt(str1[i] || 0); 
    let digit2 = parseInt(str2[i] || 0);
    sum += digit1 * digit2;
  }

  return sum;
}


