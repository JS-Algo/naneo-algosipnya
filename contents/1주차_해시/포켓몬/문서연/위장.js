function solution(clothes) {
  let answer = 1;
  const toWear = new Map();
  //배열을 map에 따로 저장
  clothes.map((cloth) => {
    const key = cloth[1];
    if (toWear.has(key)) {
      toWear.set(key, toWear.get(key) + 1);
    } else {
      toWear.set(key, 1);
    }
  });

  //옷을 착용하는 경우의 수 계산
  toWear.forEach((value) => {
    answer = answer * (value + 1);
  });

  //경우의 수 출력
  return answer - 1;
}
