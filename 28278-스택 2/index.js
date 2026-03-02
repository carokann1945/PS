const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [nStr, ...lines] = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const stack = [];
const out = [];

for (let i = 0; i < Number(nStr); i++) {
  const line = lines[i];

  if (line.startsWith('1')) {
    let value = lines[i].split(' ')[1];
    stack.push(value);
  } else if (line === '2') {
    stack.length > 0 ? out.push(stack.pop()) : out.push('-1');
  } else if (line === '3') {
    out.push(stack.length);
  } else if (line === '4') {
    out.push(stack.length === 0 ? '1' : '0');
  } else if (line === '5') {
    if (stack.length > 0) {
      out.push(stack[stack.length - 1]);
    } else {
      out.push('-1');
    }
  }
}

console.log(out.join('\n'));
