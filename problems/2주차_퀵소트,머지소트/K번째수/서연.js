/*프로그래머스 LV1 K번째 수 */
//https://school.programmers.co.kr/learn/courses/30/lessons/42748
function solution(array, commands) {
  const answer = [];
  commands.forEach((element) => {
    const keyIdx = element.pop();
    /*자르면 정렬 */
    const arr = cutSort(array, element);
    answer.push(arr[keyIdx - 1]);
  });
  return answer;
}
/* 자르고 */
function cutSort(arr, [first, end]) {
  const cutArr = arr.slice(first - 1, end);
  quickSort(cutArr, 0, cutArr.length - 1);
  return cutArr;
}
/*정렬하고 */
function sort(arr, start, end) {
  /*중간값을 피벗으로 */
  let pivot = arr[Math.floor((start + end) / 2)];
  while (start <= end) {
    while (arr[start] < pivot) start++;
    while (arr[end] > pivot) end--;
    if (start <= end) {
      /*앞이 더 크거나 뒤가 더 작을경우 바꿔주기 */
      [arr[start], arr[end]] = [arr[end], arr[start]];
      /*그 다음 반복 */
      start++;
      end--;
    }
  }
  return start;
}
function quickSort(arr, start, end) {
  if (start >= end) return;
  const dividedIdx = sort(arr, start, end);
  quickSort(arr, start, dividedIdx - 1);
  quickSort(arr, dividedIdx, end);
}
