function solution(answers) {
  let answer = [];
  // 각 학생들의 찍는 방식을 담은 배열
  let student = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  let score = []; // 각 학생의 맞은 갯수를 담는 배열
  for (let i = 0; i < student.length; i++) {
    // 맞은 갯수를 구하는 반복문
    score[i] = answers.filter(
      (problem, idx) => problem === student[i][idx % student[i].length]
    ).length;
  }

  let max = Math.max(...score); // 이 중 제일 많이 맞은 갯수를 max 에 담아준다.

  // score 배열의 각 학생의 정답 수가 max 와 같으면 해당 학생 번호 answer에 push
  if (score[0] === max) answer.push(1);
  if (score[1] === max) answer.push(2);
  if (score[2] === max) answer.push(3);

  return answer;
}
