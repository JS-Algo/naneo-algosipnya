function solution(n, lost, reserve) {
  let answer = n - lost.length;
  let realLost = lost.filter((l) => !reserve.includes(l)).sort((a, b) => a - b);
  let realReserve = reserve
    .filter((r) => !lost.includes(r))
    .sort((a, b) => a - b);

  answer = n - realLost.length;

  for (let i = 0; i < realLost.length; i++) {
    if (!realReserve.length) {
      break;
    }
    for (let j = 0; j < realReserve.length; j++) {
      if (Math.abs(realLost[i] - realReserve[j]) === 1) {
        realReserve.splice(j, 1);
        realLost.shift();
        i--;
        answer++;
        break;
      }
    }
  }
  return answer;
}
