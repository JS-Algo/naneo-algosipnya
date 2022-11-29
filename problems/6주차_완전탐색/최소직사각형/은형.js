function solution(sizes) {
  var width = 0,
    height = 0;

  for ([w, h] of [...sizes].map(([w, h]) => (w > h ? [w, h] : [h, w]))) {
    width = Math.max(w, width);
    height = Math.max(h, height);
  }

  return width * height;
}

// 더 빠른풀이
function solution(sizes) {
  var width = 0,
    height = 0;

  for ([w, h] of sizes) {
    if (w < h) [h, w] = [w, h];
    width = w > width ? w : width;
    height = h > height ? h : height;
  }

  return width * height;
}
