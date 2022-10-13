// 풀이 1 ) Map
function solution(nums) {
    let hash = new Map();
    
    nums.forEach((num) => {
        if(hash.has(num)) {
            hash.set(num, hash.get(num) + 1);
        } else {
            hash.set(num, 1);
        }
    })
    
    return Math.min(hash.size, nums.length / 2);
}

// 풀이 2 ) 집합을 이용한 풀이
function solution(nums) {
    let numSet = new Set(nums);
    
    return Math.min(numSet.size, nums.length / 2);
}