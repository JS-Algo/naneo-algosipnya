function solution(progresses, speeds) {
  let answer = [];
  // 100% 완료 기준으로 (100 - 진도) / 속도 공식을 이용하면 각 작업들이 며칠에 걸쳐서 완료되는지 알아낼 수 있음
  const completeDay = progresses.map(
    (progress, index) => Math.ceil((100 - progress) / speeds[index]) // 소수점 올림처리
  );
  let count = 1; // 작업 일수의 최솟값 1
  let maxDay = completeDay[0];

  for (let i = 1; i < completeDay.length; i++) {
    if (completeDay[i] <= maxDay) {
      // 현재 순회하는 배열 인덱스의 값이 maxDay 보다 작으면
      count++; // count 증가
    } else {
      maxDay = completeDay[i];
      answer.push(count); // 현재 count 의 값을 answer 배열에 push
      count = 1; // count 다시 1로 초기화
    }
  }

  answer.push(count); // 마지막 count 값 answer 배열에 push

  return answer;
}

// 다른 풀이 (while 문을 이용, shift()를 사용하여 큐의 구조가 더 잘 보이는 풀이라서 긁어옴!)
function solution(progresses, speeds) {
  let answer = [];

  while (speeds.length > 0) {
    // speed 배열길이가 0이 될때까지
    let cnt = 0;
    for (let i = 0; i < speeds.length; i++) {
      // progress와 speed 짝지어 더하기
      if (progresses[i] < 100) {
        // 100이 넘어가면 그만 더하기
        progresses[i] += speeds[i];
      }
    }
    while (progresses[0] >= 100) {
      // 맨앞의 progress배열이 100이 넘으면 shift
      progresses.shift();
      speeds.shift(); // speed도 shift
      cnt++;
    }
    if (cnt > 0) {
      answer.push(cnt);
    }
  }
  return answer;
}
