function solution(progresses, speeds) {
    let answer = [];
    let queue = progresses.map((progress, idx) => 
                               Math.ceil((100 - progress) / speeds[idx])
                              );
    
    let top = queue[0];
    for(let i=1, jobs = 1; i<queue.length+1; i++) {
        if(queue[i] <= top){
            jobs += 1;
        } else {
            answer.push(jobs);
            jobs = 1;
            top = queue[i];
        }
    }
    
    return answer;
}