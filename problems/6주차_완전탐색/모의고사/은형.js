function solution(answers) {
  let answer = [];
  let solves = {
    1: [1, 2, 3, 4, 5],
    2: [2, 1, 2, 3, 2, 4, 2, 5],
    3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };
  let bingos = [0, 0, 0]; // 맞춘문제 수

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < 3; j++)
      if (solves[j + 1][i % solves[j + 1].length] === answers[i])
        bingos[j] += 1;
  }

  let maxBingo = Math.max(...bingos);
  bingos.forEach((bingo, index) => {
    if (bingo >= maxBingo) answer.push(index + 1);
  });

  return answer;
}

// reduce 함수 써보기
function solution(answers) {
  let solves = {
    1: [1, 2, 3, 4, 5],
    2: [2, 1, 2, 3, 2, 4, 2, 5],
    3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };
  let bingos = [0, 0, 0]; // 맞춘문제 수

  for (let i = 0; i < answers.length; i++) {
    if (solves[1][i % solves[1].length] === answers[i]) bingos[0] += 1;
    if (solves[2][i % solves[2].length] === answers[i]) bingos[1] += 1;
    if (solves[3][i % solves[3].length] === answers[i]) bingos[2] += 1;
  }

  let maxBingo = Math.max(...bingos);

  return bingos.reduce((acc, cur, idx) => {
    if (cur >= maxBingo) acc.push(idx + 1);
    return acc;
  }, []);
}
