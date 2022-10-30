function solution(progresses, speeds) {
  let answer = [];
  const completeDay = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let count = 1;
  let maxDay = completeDay[0];

  for (let i = 1; i < completeDay.length; i++) {
    if (completeDay[i] <= maxDay) {
      count++;
    } else {
      maxDay = completeDay[i];
      answer.push(count);
      count = 1;
    }
  }

  answer.push(count);

  return answer;
}
