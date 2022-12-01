function solution(arr) {
  if (arr.length > 1000000) {
    return;
  }
  let queue = [];
  queue.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      queue.push(arr[i]);
    }
  }
  return queue;
}
