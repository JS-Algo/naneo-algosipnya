function solution(progresses, speeds) {
    var answer = [];
    let queue = [];
    
    for(let i=0; i<progresses.length; i++){
        queue.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    
    let top = queue[0];
    let jobs = 1;
    for(let i=1; i<queue.length+1; i++) {
        if(queue[i] <= top){
            jobs += 1;
        } else {
            answer.push(jobs);
            jobs = 1;
            top = queue[i]
        }
    }
    
    return answer;
}