function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) {
      // 현재 순회중인 수 가 마지막에 넣은 수와 과 같지 않다면
      answer.push(arr[i]); // answer 배열로 push
    }
  }

  return answer;
}
