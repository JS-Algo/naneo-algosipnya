function solution(s) {
  const arr = [];
  let size = 0;
  for (const item of s) {
    if (item === "(") {
      arr.push("(");
      size++;
    } else {
      if (size === 0) return false;
      else {
        arr.pop();
        size--;
      }
    }
  }
  if (size === 0) {
    return true;
  } else {
    return false;
  }
}
