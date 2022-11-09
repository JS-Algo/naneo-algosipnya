function solution(progresses, speeds) {
    let answer = [];    
    let endDate = [];
    let maxDate = endDate[0];
    
    for(let i = 0; progresses.length > i; i++){
        let remainProgress = 100 - progresses[i];
        let progressPerDate = parseInt(remainProgress / speeds[i]);
        
        if(remainProgress % speeds[i] > 0){
            progressPerDate += 1; 
        }
        endDate.push(progressPerDate);
    }  
        
    for(let i=0; i < endDate.length; i++){
        if(endDate[i] <= maxDate){
            answer[answer.length-1] += 1
        }else{
            answer.push(1)
            maxDate = endDate[i]
        }
    }
    
    return answer;
}