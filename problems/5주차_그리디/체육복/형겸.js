function solution(n, lost, reserve) {
  const allLost = lost // 체육복을 도난당하고, 여벌도 없는 학생 수
    .sort((a, b) => a - b) // 오름차순 정렬
    .filter((lost) => !reserve.includes(lost));
  const noLostReserve = reserve // 도난당하지 않고 여벌도 있는 학생 수
    .sort((a, b) => a - b)
    .filter((reserve) => !lost.includes(reserve));

  const losted = allLost.filter((lost) => {
    // 최종적으로 체육수업을 나갈 수 없는 학생 구하기
    const lend = noLostReserve.find((reserve) => Math.abs(reserve - lost) == 1);

    if (!lend) return lost; // 아무도 빌려줄 수 없는 상황이면 그대로 lost 반환
    noLostReserve = noLostReserve.filter((reserve) => reserve !== lend);
  });

  return n - losted.length;
}
