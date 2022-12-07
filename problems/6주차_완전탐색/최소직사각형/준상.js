function solution(sizes) {
  var answer = 0;
  sizes.sort((a, b) => Math.max(...b) - Math.max(...a));
  let width = Math.max(...sizes[0]);
  let tmp = Math.min(...sizes[0]);
  sizes.shift();
  let ary = [];
  for (const x of sizes) {
    ary.push(Math.min(...x));
  }
  let height = tmp > Math.max(...ary) ? tmp : Math.max(...ary);
  return width * height;
}
