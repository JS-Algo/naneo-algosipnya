function solution(nums) {
    let answer = 0;
    let monMap = new Map();
    for (const x of nums) {
        if (monMap.has(x)) {
            monMap.set(x, monMap.get(x) + 1);
        } else {
            monMap.set(x, 1);
        }
    }
    
    if (monMap.size >= nums.length / 2) {
        answer = nums.length / 2;
    } else {
        answer = monMap.size;
    }
    return answer;
}