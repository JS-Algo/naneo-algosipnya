function solution(citations) {
    let answer = 0;
    citations.sort((a,b)=>b - a);
    for(let i = 0; citations.length > i; i++ ){
        if(citations[i] > i){
            answer += 1;
        }else break;
    }
    return answer;
}