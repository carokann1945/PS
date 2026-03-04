const fs = require('fs');

const filePath = fs.existsSync('./input.txt') ? './input.txt' : '/dev/stdin';
const lines = fs.readFileSync(filePath).toString().trim().split('\n');

for (const rawLine of lines) {
  const line = rawLine;
  if (line.length === 1 && line[0] === '.') break;

  const stack = [];
  let yes = true;

  for (const char of line) {
    if (char === '(' || char === '[') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) {
        yes = false;
        break;
      } else if (stack.length > 0 && stack[stack.length - 1] !== '(') {
        yes = false;
        break;
      }
      stack.pop();
    } else if (char === ']') {
      if (stack.length === 0) {
        yes = false;
        break;
      } else if (stack.length > 0 && stack[stack.length - 1] !== '[') {
        yes = false;
        break;
      }
      stack.pop();
    }
  }

  if (yes && stack.length === 0) {
    console.log('yes');
  } else {
    console.log('no');
  }
}
