function solution(priorities, location) {
    let answer = 0;
    let printCount = 0;
    let myDocumentQueue = location; 
    
    while(priorities.length > 0){
        let firstQueuePriority = priorities.shift();
        
        if(priorities.filter((otherPriority) => otherPriority > firstQueuePriority).length > 0){
            priorities.push(firstQueuePriority);            
        }else{
            printCount += 1;
            if(myDocumentQueue === 0){
                return answer = printCount;
            }
        }
        myDocumentQueue -= 1;
        
        if(myDocumentQueue === -1){
            myDocumentQueue = priorities.length - 1;
        }
    }
    
    return answer;
}