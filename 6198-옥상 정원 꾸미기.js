const fs = require('fs');

const filePath = fs.existsSync('./input.txt') ? './input.txt' : '/dev/stdin';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const heights = [];
const stack = [];
let totalViewCount = 0;

// 두 번째 줄부터 주어지는 건물의 높이를 배열에 저장
for (let i = 1; i <= N; i++) {
  heights.push(Number(input[i]));
}

// 각 건물을 순차적으로 탐색
for (let i = 0; i < N; i++) {
  const currentHeight = heights[i];

  // 1. 현재 건물보다 높이가 낮거나 같은 건물은 시야가 가려지므로 스택에서 제거
  while (stack.length > 0 && stack[stack.length - 1] <= currentHeight) {
    stack.pop();
  }

  // 2. 스택에 남아있는 건물들은 현재 건물을 볼 수 있는 건물들이므로 개수를 누적
  totalViewCount += stack.length;

  // 3. 현재 건물을 스택에 추가하여 다음 건물들의 시야를 가릴 수 있는지 판별할 수 있게 함
  stack.push(currentHeight);
}

// 최종 누적합 출력
console.log(totalViewCount);
