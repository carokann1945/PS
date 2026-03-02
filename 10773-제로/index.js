const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [nStr, ...lines] = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const stack = [];
let result = 0;

for (let i = 0; i < Number(nStr); i++) {
  const line = lines[i];
  if (line !== '0') {
    stack.push(line);
  } else {
    stack.pop();
  }
}

if (stack.length === 0) {
  result = 0;
} else {
  stack.forEach((num) => {
    result += Number(num);
  });
}

console.log(result);
