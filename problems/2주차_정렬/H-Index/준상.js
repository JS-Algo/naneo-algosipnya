function solution(citations) {
  let n = citations.length;
  if (n < 1 || n > 1000) {
    return;
  }
  var answer = 0;

  let max = Math.max(...citations);
  let h = max;
  for (let i = max; i > 0; i--) {
    let read = 0;
    for (const x of citations) {
      if (x >= h) {
        read++;
      }
    }
    if (read < h) {
      h--;
    }
    answer = h;
  }
  return answer;
}
