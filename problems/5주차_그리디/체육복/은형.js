function solution(n, lost, reserve) {
  var answer = [];

  // lost와 reserve의 중복 먼저 제거
  for (let i = 1; i < n + 1; i++) {
    if (lost.includes(i) && reserve.includes(i)) {
      lost = lost.filter((std) => std !== i);
      reserve = reserve.filter((std) => std !== i);
      answer.push(i);
    }
  }
  console.log(lost, reserve);

  for (let i = 1; i < n + 1; i++) {
    if (lost.includes(i)) {
      if (reserve.includes(i - 1)) {
        reserve = reserve.filter((item) => item !== i - 1);
        answer.push(i);
      } else if (reserve.includes(i + 1)) {
        reserve = reserve.filter((item) => item !== i + 1);
        answer.push(i);
      }
    } else if (!answer.includes(i)) {
      answer.push(i);
    }
  }

  return answer.length;
}
