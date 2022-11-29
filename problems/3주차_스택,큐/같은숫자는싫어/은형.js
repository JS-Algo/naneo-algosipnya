function solution(arr)
{
    var answer = [];
    
    arr.map((number) => {
        const prev = answer[answer.length - 1]
        if(prev !== number) {
            answer.push(number)
        }
    })
    
    return answer;
}