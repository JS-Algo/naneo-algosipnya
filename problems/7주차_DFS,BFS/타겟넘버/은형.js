function solution(numbers, target) {
  var answer = 0;

  function dfs(index, node) {
    if (index === numbers.length) {
      if (node === target) {
        answer++;
      }
      return;
    }
    dfs(index + 1, node + numbers[index]);
    dfs(index + 1, node - numbers[index]);
  }
  dfs(0, 0);

  return answer;
}
