function solution(clothes) {
    var answer = 1;
    let hash = new Map();
    
    clothes.forEach((cloth) => {
        if(hash.has(cloth[1])){
            hash.set(cloth[1], hash.get(cloth[1]) + 1)
        } else {
            hash.set(cloth[1], 1)
        }
    });
    
    // 특정 가짓수를 선택하지 않는 경우의 수까지 더해서 곱하기
    hash.forEach((value) => {
        answer *= (value + 1);
    });
    
    // 아무것도 선택하지 않는 경우의 수 하나 빼기
    return answer - 1;
}