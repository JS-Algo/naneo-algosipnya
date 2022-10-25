function solution(genres, plays) {
    var answer = [];
    let hash = new Map();
    
    for(let i=0; i<genres.length; i++){
        if(hash.has(genres[i])){
            hash.set(genres[i], new Map([...hash.get(genres[i]), 
             [i, plays[i]]].sort((a, b) => (
                a[1] === b[1]? a[0] - b[0] : b[1] - a[1]
            ))))
        } else {
            hash.set(genres[i], new Map([[i, plays[i]]]))
        };
    };
    
    hash = new Map([...hash.entries()].sort((a, b) => (
        Array.from(b[1].values()).reduce((a, b) => a + b, 0) - Array.from(a[1].values()).reduce((a, b) => a + b, 0)
    )));
    
    hash.forEach((value) => {
        const arr = Array.from(value.keys())
        answer.push(arr[0]);
        if(value.size > 1){
            answer.push(arr[1]);
        };
    });
    
    return answer;
}