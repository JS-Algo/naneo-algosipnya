function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for(let i=0; participant.length > 1; i++){
        if(participant[i]!==completion[i]){
            return participant[i]
        }
    }
}