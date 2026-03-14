const fs = require('fs');

const filePath = fs.existsSync('./input.txt') ? './input.txt' : '/dev/stdin';
const input = fs.readFileSync(filePath).toString().trim();

const stack = [];
let temp = 1;
let answer = 0;
let isValid = true;

for (let i = 0; i < input.length; i++) {
  const char = input[i];

  if (char === '(') {
    temp *= 2;
    stack.push(char);
  } else if (char === '[') {
    temp *= 3;
    stack.push(char);
  } else if (char === ')') {
    if (stack.length === 0 || stack[stack.length - 1] !== '(') {
      isValid = false;
      break;
    }
    if (input[i - 1] === '(') {
      answer += temp;
    }
    temp /= 2;
    stack.pop();
  } else if (char === ']') {
    if (stack.length === 0 || stack[stack.length - 1] !== '[') {
      isValid = false;
      break;
    }
    if (input[i - 1] === '[') {
      answer += temp;
    }
    temp /= 3;
    stack.pop();
  }
}

if (isValid && stack.length === 0) {
  console.log(answer);
} else {
  console.log(0);
}
