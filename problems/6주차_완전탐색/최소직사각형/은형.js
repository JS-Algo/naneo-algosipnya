function solution(sizes) {
  var width = 0,
    height = 0;

  for ([w, h] of [...sizes].map(([w, h]) => (w > h ? [w, h] : [h, w]))) {
    width = Math.max(w, width);
    height = Math.max(h, height);
  }

  return width * height;
}
