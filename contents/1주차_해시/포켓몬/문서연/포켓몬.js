function solution(nums) {
  let ans = 0;
  //뽑을 수 있는 포켓몬의 개수
  const pokNum = nums.length / 2;
  const hash = new Map();
  //hash에 저장
  for (const num of nums) {
    hash.has(num) ? hash.set(num, hash.get(num) + 1) : hash.set(num, 1);
  }
  //최대 경우의 수 출력
  hash.size >= pokNum ? (ans = pokNum) : (ans = hash.size);
  return ans;
}
