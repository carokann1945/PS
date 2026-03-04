//실패 기록
//1차 실패 - 시간초과
//2차 성공 - 답을 스택에 밀어넣고 한번에 출력하기

const fs = require('fs');

const filePath = fs.existsSync('./input.txt') ? './input.txt' : '/dev/stdin';
const [nStr, ...lines] = fs.readFileSync(filePath).toString().trim().split('\n');

const stack = [];
const out = [];
for (const line of lines) {
  const [a, b] = line.split(' ');
  if (a === 'push') {
    stack.push(Number(b));
  } else if (a === 'pop') {
    if (stack.length > 0) {
      out.push(stack.pop());
    } else {
      out.push(-1);
    }
  } else if (a === 'size') {
    out.push(stack.length);
  } else if (a === 'empty') {
    if (stack.length > 0) {
      out.push(0);
    } else {
      out.push(1);
    }
  } else if (a === 'top') {
    if (stack.length > 0) {
      out.push(stack[stack.length - 1]);
    } else {
      out.push(-1);
    }
  }
}

console.log(out.join('\n'));
