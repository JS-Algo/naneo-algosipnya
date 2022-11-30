// function solution(sizes) {
//   const smallNums = [];
//   const concattedArr = sizes.reduce((acc, cur) => {
//     const [num, diffNum] = cur;
//     smallNums.push(num > diffNum ? diffNum : num);
//     return [...acc, ...cur];
//   }, []);
//   concattedArr.sort((a, b) => {return a - b;});
//   smallNums.sort((a, b) => {return a - b});
//   const biggestNum = concattedArr[concattedArr.length - 1];
//   const biggerNum = smallNums[smallNums.length - 1];
//   return biggerNum * biggestNum;
// }

function solution(sizes) {
  let horizontal = 0;
  let vertical = 0;
  sizes.forEach((el) => {
    if (horizontal < Math.max(...el)) horizontal = Math.max(...el);
    if (vertical < Math.min(...el)) vertical = Math.min(...el);
  });
  return horizontal * vertical;
}
