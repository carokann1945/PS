const fs = require('fs');

const filePath = fs.existsSync('./input.txt') ? './input.txt' : '/dev/stdin';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const targetSequence = input.slice(1).map(Number);

const stack = [];
const out = [];
let idx = 0;

for (let i = 1; i <= n; i++) {
  stack.push(i);
  out.push('+');

  while (stack.length > 0 && stack[stack.length - 1] === targetSequence[idx]) {
    stack.pop();
    out.push('-');
    idx++;
  }
}

if (stack.length > 0) {
  console.log('NO');
} else {
  console.log(out.join('\n'));
}

// const n = Number(nStr);
// const stack = [];
// const out = [];
// let flag = true;

// for (let i = 1; i <= n; i++) {
//   if (lines.length === 0 && stack.length > 0) {
//     console.log('NO');
//     process.exit(0);
//   } else if (lines.length !== 0) {
//     stack.push(i);
//     out.push('+');
//     if (stack[stack.length - 1] === Number(lines[0])) {
//       stack.pop();
//       lines.shift();
//       out.push('-');
//       while (flag) {
//         if (stack[stack.length - 1] === Number(lines[0])) {
//           stack.pop();
//           lines.shift();
//           out.push('-');
//         } else if (stack[stack.length - 1] !== Number(lines[0])) {
//           flag = false;
//         }
//       }
//     }
//   }
// }

// if (stack.length > 0) {
//   console.log('NO');
// } else if (stack.length === 0) {
//   console.log(out.join('\n'));
// }
