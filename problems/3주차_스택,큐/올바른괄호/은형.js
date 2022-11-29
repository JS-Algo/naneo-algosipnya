// 좀 더 빠른 풀이
function solution(s) {
  let stack = [];

  Array.from(s).map((c) => {
    let prev = stack[stack.length - 1];
    stack.push(c);

    if (prev === "(" && c === ")") {
      stack.pop();
      stack.pop();
    }
  });

  return stack.length > 0 ? false : true;
}

function solution(s) {
  let stack = [];

  for (c of Array.from(s)) {
    if (c === "(") {
      stack.push("(");
    } else if (c === ")" && stack.length > 0) {
      stack.pop();
    } else {
      // stack이 비어있는 상태에서 ")"를 만나면
      return false;
    }
  }

  return stack.length > 0 ? false : true;
}
