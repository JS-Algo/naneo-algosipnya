function solution(participant, completion) {
    let answer = '';
    let participantMap = new Map();
    for (const x of participant) {
        if (participantMap.get(x)) {
            participantMap.set(x, participantMap.get(x) + 1);
        } else {
            participantMap.set(x, 1);
        }
    }
    
    for (const x of completion) {
        if (participantMap.get(x) > 1) {
            participantMap.set(x, participantMap.get(x) - 1);
        } else {
            participantMap.delete(x);
        }
    }
    
    participantMap.forEach((value, key) => answer += key);
    return answer;
}