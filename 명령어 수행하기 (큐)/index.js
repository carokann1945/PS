function solution(commands) {
  const queue = [];
  const result = [];
  for (let char of commands) {
    if (char[0] === 'E') {
      queue.push(char[char.length - 1]);
    } else {
      if (queue.length === 0) {
        result.push('EMPTY');
      } else {
        result.push(queue.shift());
      }
    }
  }
  return result;
}

function solution2(commands) {
  const queue = [];
  const result = [];
  commands.forEach((command) => {
    const [action, value] = command.split(' ');
    if (action === 'ENQUEUE') {
      queue.push(Number(value));
    } else if (action === 'DEQUEUE') {
      result.push(queue.length ? Number(queue.shift()) : 'EMPTY');
    }
  });

  return result;
}

console.log(solution(['ENQUEUE 3', 'ENQUEUE 5', 'DEQUEUE', 'DEQUEUE', 'DEQUEUE']));
console.log(solution2(['ENQUEUE 3', 'ENQUEUE 5', 'DEQUEUE', 'DEQUEUE', 'DEQUEUE']));
