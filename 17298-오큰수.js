const fs = require('fs');

const filePath = fs.existsSync('./input.txt') ? './input.txt' : '/dev/stdin';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const out = new Array(N).fill(-1);
const stack = [];

for (let i = 0; i < N; i++) {
  while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
    const idx = stack.pop();
    out[idx] = arr[i];
  }
  stack.push(i);
}

console.log(out.join(' '));
