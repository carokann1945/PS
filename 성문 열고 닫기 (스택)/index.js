function solution(gate) {
  let open = 0;
  let close = 0;
  for (const g of gate) {
    if (g === '<') {
      open++;
    }
    if (g === '>' && open > close) {
      close++;
    } else if (g === '>' && open <= close) {
      return false;
    }
  }
  if (open > close) {
    return false;
  }
  return true;
}

function solution2(gate) {
  const stack = [];
  for (let char of gate) {
    if (char === '<') {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(solution('<<>>'));
console.log(solution('<><>'));
console.log(solution('>><<'));
console.log(solution('<<<>'));
console.log('----------------');
console.log(solution2('<<>>'));
console.log(solution2('<><>'));
console.log(solution2('>><<'));
console.log(solution2('<<<>'));
