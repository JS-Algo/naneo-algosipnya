function solution(brown, yellow) {
  let hwlist = [];
  let h = 1,
    w = yellow;

  while (h <= w) {
    hwlist.push([h, w]);
    h++, (w = yellow / h);
  }

  return hwlist.reduce((acc, [h, w]) => {
    if ((h + 2) * (w + 2) === yellow + brown) acc.push(w + 2, h + 2);
    return acc;
  }, []);
}
