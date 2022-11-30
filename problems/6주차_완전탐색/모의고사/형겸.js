function solution(answers) {
  let answer = [];
  let student = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  let score = [];
  for (let i = 0; i < student.length; i++) {
    score[i] = answers.filter(
      (problem, idx) => problem === student[i][idx % student[i].length]
    ).length;
  }

  let max = Math.max(...score);

  if (score[0] === max) answer.push(1);
  if (score[1] === max) answer.push(2);
  if (score[2] === max) answer.push(3);

  return answer;
}
