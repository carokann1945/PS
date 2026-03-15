const fs = require('fs');

const filePath = fs.existsSync('./input.txt') ? './input.txt' : '/dev/stdin';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const stack = [];
const out = new Array(N).fill(-1);
const arr = input[1].split(' ').map(Number);
const hundred = new Array(1000002).fill(0);

for (let i = 0; i < N; i++) {
  hundred[arr[i]]++;
}

for (let i = 0; i < N; i++) {
  while (stack.length > 0 && hundred[arr[stack[stack.length - 1]]] < hundred[arr[i]]) {
    const idx = stack.pop();
    out[idx] = arr[i];
  }
  stack.push(i);
}

console.log(out.join(' '));
