// map 자료형을 이용한 풀이
function solution(nums) {
  let hashMap = new Map();
  for (const num of nums) {
    hashMap.has(num)
      ? hashMap.set(num, hashMap.get(num) + 1)
      : hashMap.set(num, 1);
  }

  return hashMap.size >= nums.length / 2 ? nums.length / 2 : hashMap.size;
}

// set 자료형을 이용한 풀이
function solution(nums) {
  let hashSet = Array.from(new Set(nums)).length;
  return nums.length / 2 < hashSet ? nums.length / 2 : hashSet;
}
