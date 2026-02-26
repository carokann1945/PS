class Stack {
  constructor() {
    this.array = [];
  }
  push(value) {
    this.array.push(value);
  }
  pop() {
    return this.array.pop();
  }
  peek() {
    return this.array[this.array.length - 1];
  }
}

function solution(boxes) {
  const arr = new Stack();
  for (let i of boxes) {
    if (arr.peek() != i) {
      arr.push(i);
    }
  }
  return arr.array;
}

function solution2(boxes) {
  const stack = [];
  for (let box of boxes) {
    if (stack[stack.length - 1] !== box) {
      stack.push(box);
    }
  }

  return stack;
}

console.log(solution([2, 2, 5, 5, 5, 1, 1]));
console.log(solution([7, 7, 8, 8, 0, 0, 0]));
console.log(solution2([2, 2, 5, 5, 5, 1, 1]));
console.log(solution2([7, 7, 8, 8, 0, 0, 0]));
