function solution(n, lost, reserve) {
  const allLost = lost
    .sort((a, b) => a - b)
    .filter((lost) => !reserve.includes(lost));
  const noLostReserve = reserve
    .sort((a, b) => a - b)
    .filter((reserve) => !lost.includes(reserve));

  const losted = allLost.filter((lost) => {
    const lend = noLostReserve.find((reserve) => Math.abs(reserve - lost) == 1);

    if (!lend) return lost;
    noLostReserve = noLostReserve.filter((reserve) => reserve !== lend);
  });

  return n - losted.length;
}
