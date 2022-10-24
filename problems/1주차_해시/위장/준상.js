function solution(clothes) {
    let answer = 1;
    let clothesMap = new Map();
    clothes.map(([item, part]) => {
        if (clothesMap.has(part)) {
            clothesMap.set(part, clothesMap.get(part) + 1);
        } else {
            clothesMap.set(part, 1);
        }
    })
    for (const x of clothesMap) {
        answer *= (x[1] + 1);
    }
    
    return answer - 1;
}