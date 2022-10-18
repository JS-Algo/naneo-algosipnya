function solution(participant, completion) {
  let answer = "";

  let hashMap = new Map();

  for (let p of participant) {
    hashMap.set(p, hashMap.get(p) + 1 || 1);
  }

  for (let c of completion) {
    hashMap.get(c) === 1
      ? hashMap.delete(c)
      : hashMap.set(c, hashMap.get(c) - 1);
  }

  for (let [key, value] of hashMap) {
    answer = key;
  }

  return answer;
}
