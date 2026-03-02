function solution(s) {
  const stack = [];
  for (let char of s) {
    stack.push(char);
    if (stack.length >= 2 && stack[stack.length - 2].toLowerCase() === stack[stack.length - 1].toLowerCase()) {
      stack.pop();
      stack.pop();
    } else {
      flag = false;
    }
  }
  return stack.join('');
}

function solution2(s) {
  const stack = [];
  for (let char of s) {
    const top = stack[stack.length - 1];
    if (top && Math.abs(top.charCodeAt() - char.charCodeAt()) === 32) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
}

console.log(solution('infFflearn'));
console.log(solution('aAbBcC'));
console.log(solution('xYyX'));
console.log(solution('a'));
console.log(solution('Code'));
console.log(solution('-1-1-1-1-1-1-1-1-1-'));
console.log(solution2('infFflearn'));
console.log(solution2('aAbBcC'));
console.log(solution2('xYyX'));
console.log(solution2('a'));
console.log(solution2('Code'));
