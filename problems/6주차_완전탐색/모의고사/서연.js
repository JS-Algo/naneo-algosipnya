function solution(answers) {
  const answer = [];
  let corrected = [0, 0, 0];
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i in answers) {
    if (answers[i] == one[i % one.length]) corrected[0]++;
    if (answers[i] == two[i % two.length]) corrected[1]++;
    if (answers[i] == three[i % three.length]) corrected[2]++;
  }
  const max = Math.max(corrected[0], corrected[1], corrected[2]);
  for (let i in corrected) {
    if (max == corrected[i]) answer.push(parseInt(i) + 1);
  }
  return answer;
}
