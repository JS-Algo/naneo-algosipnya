function solution(operations) {
  let arr = [];
  operations.map((operation) => {
    operation = operation.split(" ");
    if (operation[0] === "I") {
      arr.push(Number(operation[1]));
    } else if (arr.length) {
      if (operation[1] === "1") {
        arr.sort((a, b) => a - b);
        arr.pop();
      } else {
        arr.sort((a, b) => b - a);
        arr.pop();
      }
    }
  });
  arr.sort((a, b) => a - b);
  arr.length === 0 ? (arr = [0, 0]) : (arr = [arr[arr.length - 1], arr[0]]);
  return arr;
}
