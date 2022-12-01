function solution(priorities, location) {
  var answer = 0;
  let printer = priorities.map((priority, index) => [index, priority]);

  while (printer.length > 0) {
    let top = Math.max(...priorities); // 제일 높은 우선순위
    let [index, priority] = printer.shift();

    if (priority === top && index === location) {
      answer += 1;
      break;
    } else if (priority === top) {
      priorities.shift();
      answer += 1;
    } else {
      // 우선순위도 같이 돌아야 함
      priorities.push(priorities.shift());
      printer.push([index, priority]);
    }
  }

  return answer;
}
