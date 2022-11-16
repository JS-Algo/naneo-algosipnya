function solution(operations) {
  const heap = [];
  const commands = operations.map((operation) => operation.split(" ")); // operation 배열의 요소를 빈칸을 기준으로 나눔

  commands.forEach((command) => {
    if (command[0] === "I") {
      // 문자열의 인덱스 0번이 "I"  이면
      heap.push(Number(command[1])); // 숫자로 변환하여 heap 에 push
    } else {
      // 그 외의 경우(문자열의 인덱스 0 번이 "D" 이면)
      heap.splice(
        heap.indexOf((command[1] === "1" ? Math.max : Math.min)(...heap)), // 인덱스 1번이 1이면 최댓값, 그게 아니라면(-1 이라면) 최솟값 을 찾아 삭제
        1
      );
    }
  });

  return heap.length ? [Math.max(...heap), Math.min(...heap)] : [0, 0];
}
