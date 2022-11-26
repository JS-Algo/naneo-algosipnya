function solution(sizes) {
  let w = [];
  let h = [];
  for (let size of sizes) {
    size.sort((a, b) => a - b);
    w.push(size[0]);
    h.push(size[1]);
  }
  w.sort((a, b) => a - b);
  h.sort((a, b) => a - b);

  return w[w.length - 1] * h[h.length - 1];
}
