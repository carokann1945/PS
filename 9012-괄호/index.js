const fs = require('fs');

const filePath = fs.existsSync('./input.txt') ? './input.txt' : '/dev/stdin';
const [nStr, ...lines] = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < Number(nStr); i++) {
  const stack = [];
  const line = lines[i];
  let yes = true;

  for (const char of line) {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) {
        yes = false;
        break;
      }
      stack.pop();
    }
  }

  if (yes && stack.length === 0) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}
