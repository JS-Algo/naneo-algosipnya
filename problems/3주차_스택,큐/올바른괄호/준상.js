function solution(s) {
  let answer;
  let stack = [];
  for (const x of s) {
    if (x === "(") {
      stack.push(x);
    } else {
      if (!stack.length) {
        return false;
      }
      stack.pop();
    }
  }
  stack.length ? (answer = false) : (answer = true);

  return answer;
}
