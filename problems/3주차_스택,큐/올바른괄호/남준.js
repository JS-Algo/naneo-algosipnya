function solution(s){
    let a = 0;
    if(s[0]===')' || s[-1]==='('){
        return false;
    }
    for (let letter of s ){
        if (letter === '(') a += 1;
        if (letter === ')') a -= 1;
        if (a < 0) return false;
    }
    return a === 0 ; 
}