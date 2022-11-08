//https://school.programmers.co.kr/learn/courses/30/lessons/42586
function solution(progresses, speeds) {
  const answer = [];
  //진행률 개수
  const num = progresses.length;
  // 반복문 index
  let i = 1;
  // 첫번째 작업 먼저 카운트
  let dayNum = 1;
  // 남은 날들 가져오는 함수
  const getleftday = (j) => {
    return Math.ceil((100 - progresses[j]) / speeds[j]);
  };
  // 가장 큰 수(처음엔 배열 첫번째 요소로 초기화)
  let maxNum = getleftday(0);
  function recurse() {
    if (i < num) {
      let leftday = getleftday(i);
      if (leftday > maxNum) {
        maxNum = leftday;
        answer.push(dayNum);
        dayNum = 1;
      } else {
        dayNum++;
      }
      i++;
      recurse();
    } else {
      answer.push(dayNum);
      return;
    }
  }
  recurse();
  return answer;
}
