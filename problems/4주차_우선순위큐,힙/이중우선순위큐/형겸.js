function solution(operations) {
  const heap = [];
  const command = operations.map((operation) => operation.split(" "));

  command.forEach((num) => {
    if (num[0] === "I") {
      heap.push(Number(num[1]));
    } else {
      heap.splice(
        heap.indexOf((num[1] === "1" ? Math.max : Math.min)(...heap)),
        1
      );
    }
  });

  return heap.length ? [Math.max(...heap), Math.min(...heap)] : [0, 0];
}
