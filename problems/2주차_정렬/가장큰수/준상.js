function solution(numbers) {
  if (numbers.length < 1 || numbers.length > 100000) {
    return;
  }
  var answer = "";
  let strAry = numbers
    .map((item) => item + "")
    .sort((a, b) => b + a - (a + b))
    .join("");
  answer += strAry;
  return answer[0] === "0" ? "0" : answer;
}
