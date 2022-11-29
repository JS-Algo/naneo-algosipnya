function solution(operations) {
  var answer = [];
  let heap = [];

  operations.forEach((operation) => {
    let opr = operation[0];
    let operand = parseInt(operation.substring(2));

    if (opr === "I") {
      heap.push(operand);
    } else if (opr === "D" && heap.length) {
      if (operand === 1) {
        // 최대 힙으로 바꾸고 삭제
        heap.sort((a, b) => a - b);
        heap.pop();
      } else if (operand === -1) {
        // 최소 힙으로 바꾸고 삭제
        heap.sort((a, b) => b - a);
        heap.pop();
      }
    }
  });

  return heap.length ? [Math.max(...heap), Math.min(...heap)] : [0, 0];
}
