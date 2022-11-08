/*프로그래머스 H-index*/
//https://school.programmers.co.kr/learn/courses/30/lessons/42747
function solution(citations) {
  let ans = 0;
  citations.sort((a, b) => b - a);
  for (const [idx, val] of citations.entries()) {
    if (val >= idx + 1) {
      ans++;
    }
  }
  return ans;
}
