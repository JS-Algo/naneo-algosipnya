function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);
  let i = 0,
    j = people.length - 1;
  while (i < j) {
    if (people[i] + people[j] <= limit) {
      i++;
      j--;
    } else {
      j--;
    }
    answer++;
  }
  if (i === j) answer++;
  return answer;
}
