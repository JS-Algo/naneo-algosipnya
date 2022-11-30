function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b); // people 배열을 오름차순 정렬

  while (people.length !== 0) {
    // people.length가 0이 될때까지 반복
    if (people[0] + people[people.length - 1] <= limit) {
      // 배열 맨 앞, 맨 뒤 사람의 무게 합이 limit 보다 작으면
      answer++; // answer 카운트 더하고
      people.shift(); // 제일 가벼운 사람과
      people.pop(); // 제일 무거운 사람 배열에서 삭제
    } else {
      // 그게 아니라면?
      answer++; // answer 카운트 더하고
      people.pop(); // 제일 무거운 사람 하나만 배열에서 삭제
    }
  }

  return answer;
}
