function solution(citations) {
    var answer = 0;
    
    citations.sort()
    for(let h=0; h<Math.max(...citations); h++) {
        let left = citations.filter((citation) => citation < h);
        let right = citations.filter((citation) => citation >= h);
        if(right.length >= h && h > Math.max(...left)){
            answer = Math.max(answer, h)
        }
    }
    
    return answer;
}