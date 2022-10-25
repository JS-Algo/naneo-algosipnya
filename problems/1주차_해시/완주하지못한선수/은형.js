// 최대 32ms
function solution(participants, completions) {
    let answer = '';
    let hash = new Map(); // 참가자 맵
    
    participants.forEach((participant) => {
        hash.has(participant) ?
            hash.set(participant, hash.get(participant) + 1) :
            hash.set(participant, 1);
    });
    
    completions.forEach((completion) =>{
        hash.set(completion, hash.get(completion) - 1);
    });
    
    hash.forEach((value, key) => {
        if(value > 0) {
            answer = key;
        }
    })
    
//     예외를 발생시키는 경우를 제외하고는 forEach() 루프를 중단시킬 방법은 없다. 
// 만약 그러한 목적으로 forEach() 메소드를 사용하는것은 잘못된 방법이다.
    
    return answer;
}

// 최대 42ms
function solution(participants, completions) {
    let hash = new Map(); // 참가자 맵
    
    participants.forEach((participant) => {
        hash.has(participant) ?
            hash.set(participant, hash.get(participant) + 1) :
            hash.set(participant, 1);
    });
    
    completions.forEach((completion) => {
        hash.get(completion) == 1 ?
            hash.delete(completion) :
            hash.set(completion, hash.get(completion) - 1);
    });
    
    return [...hash][0][0];
}