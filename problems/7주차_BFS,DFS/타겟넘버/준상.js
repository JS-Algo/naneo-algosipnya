function solution(numbers, target) {
  let answer = 0;
  let n = numbers.length;
  let result = 0;

  function DFS(index, sum) {
    if (index === n) {
      if (sum === target) {
        answer++;
      }
    } else {
      DFS(index + 1, sum + numbers[index]);
      DFS(index + 1, sum - numbers[index]);
    }
  }
  DFS(0, 0);
  return answer;
}
