function solution(numbers) {
  let answer = "";

  let strNumbers = numbers.map((num) => String(num)); // 배열의 모든 숫자 요소를 문자를 변환
  strNumbers.sort((a, b) => b + a - (a + b)); // [comparefunction] 을 이용해 숫자 정렬

  answer = strNumbers.join(""); // 정렬된 문자를 join("") 을 이용해 문자로 합치기

  return numbers[0] === "0" ? "0" : answer; // 배열의 요소가 모두 0인 경우 예외처리
}
