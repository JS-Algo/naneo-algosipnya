function solution(sizes) {
  // 너비, 높이를 담아줄 배열
  let w = [];
  let h = [];
  for (let size of sizes) {
    // sizes 배열 인덱스 반복
    size.sort((a, b) => a - b); // compareFunction 을 이용해 오름차순 정렬
    w.push(size[0]); // 둘 중 작은 값 w 에 push
    h.push(size[1]); // 둘 중 큰 값 h 에 push
  }
  w.sort((a, b) => a - b); // w 배열을 오름차순 정렬
  h.sort((a, b) => a - b); // h 배열을 오름차순 정렬

  return w[w.length - 1] * h[h.length - 1]; // 각 배열의 최댓값을 곱한 값을 return
}
