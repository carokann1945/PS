const fs = require('fs');

const filePath = fs.existsSync('./input.txt') ? './input.txt' : '/dev/stdin';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);
const out = [];

for (let i = 1; i <= T * 2; i += 2) {
  const [N, M] = input[i].split(' ').map(Number);
  const priorities = input[i + 1].split(' ').map(Number);

  const queue = priorities.map((p, idx) => ({
    priority: p,
    isTarget: idx === M,
  }));

  let idx = 1;

  while (queue.length !== 0) {
    if (Number(queue[0].priority) >= Number(Math.max(...queue.map((v) => v.priority)))) {
      if (queue[0].isTarget === true) {
        out.push(idx);
        break;
      } else {
        queue.shift();
        idx++;
      }
    } else {
      let shift = queue.shift();
      queue.push(shift);
    }
  }
}

console.log(out.join('\n'));
