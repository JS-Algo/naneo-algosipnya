function solution(s) {
  const stack = [];

  // 첫 번쨰 문자열이 ")" 이면 바로 flase 를 return 한다.
  if (s[0] === ")") {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
    }
  }
  return stack.length === 0 ? true : false;
}
// push() 와 pop() 을 이용한 풀이
// 근데 i < s.length 부분에서 i<s.length 로 띄워쓰기 없이 작성하면 통과하고 띄워쓰기를 하면 효율성에서 실패한다. 왜??????????
