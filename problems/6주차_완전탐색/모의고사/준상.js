function solution(answers) {
  let answer = [];
  let check1 = [1, 2, 3, 4, 5];
  let check2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let check3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let num1 = answers.filter(
    (item, index) => item === check1[index % check1.length]
  ).length;
  let num2 = answers.filter(
    (item, index) => item === check2[index % check2.length]
  ).length;
  let num3 = answers.filter(
    (item, index) => item === check3[index % check3.length]
  ).length;
  let max = Math.max(num1, num2, num3);
  if (num1 === max) {
    answer.push(1);
  }
  if (num2 === max) {
    answer.push(2);
  }
  if (num3 === max) {
    answer.push(3);
  }
  return answer;
}
