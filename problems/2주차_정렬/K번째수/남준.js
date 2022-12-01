function solution(array, commands) {
    var answer = [];
    commands.forEach(command => {
        const [start, end, order] = command;
        let target = [...array].slice(start - 1, end);
        target.sort((a, b) => a - b);        
        answer.push(target[order - 1]);
        
    })
    return answer;
}
