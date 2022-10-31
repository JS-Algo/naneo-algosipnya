function solution(array, commands) {
  let answer = [];

  for (let command of commands) {
    let sliceArray = array.slice(command[0] - 1, command[1]);
    sliceArray.sort((a, b) => a - b);
    answer.push(sliceArray[command[2] - 1]);
  }
  return answer;
}

// 테스트 2번 해냄!! [CompareFunction] 에 대해 배웠다.
