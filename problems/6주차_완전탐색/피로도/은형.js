// const getPermutations = function (arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) return arr.map((value) => [value]);

//   arr.forEach((fixed, index, origin) => {
//     const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//     const permutations = getPermutations(rest, selectNumber - 1);
//     const attached = permutations.map((permutation) => [fixed, ...permutation]);
//     results.push(...attached);
//   });

//   return results;
// };

function solution(k, dungeons) {
  var answer = -1;

  getPermutations(dungeons, dungeons.length).forEach((orders) => {
    let fatigue = k,
      count = 0;

    for ([minimum, consume] of orders) {
      if (fatigue < 0) break;
      if (fatigue >= minimum) {
        fatigue -= consume;
        count++;
      }
    }

    answer = count > answer ? count : answer;
  });

  return answer;
}
