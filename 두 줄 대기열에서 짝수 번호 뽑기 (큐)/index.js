// 피드백
// 애초에 들어올때도 number라 형변환 필요 없음
function solution(queue1, queue2, k) {
  const queue = [...queue1, ...queue2];
  const result = [];

  while (true) {
    let num = Number(queue.shift());
    num % 2 === 0 ? result.push(num) : queue.push(num);
    if (result.length === k) return result;
  }
}

function solution2(queue1, queue2, k) {
  const queue = [...queue1, ...queue2];
  const result = [];

  while (result.length < k && queue.length > 0) {
    let person = queue.shift();
    person % 2 === 0 ? result.push(person) : queue.push(person);
  }

  return result;
}

console.log(solution([1, 3, 4], [6, 5, 8], 3));
console.log(solution2([1, 3, 4], [6, 5, 8], 3));
