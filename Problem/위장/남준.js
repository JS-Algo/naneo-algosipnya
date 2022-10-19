function solution(clothes) {
    var answer = 1;
    
    let map = new Map();
    for(let i = 0; clothes.length > i; i++){{
        let part = clothes[i][1];
        map.set(part, (map.get(part) || 0) + 1);//파트의 값을 key로 두고, 
        //의상 한개 추가할때마다 value값을 1씩 증가
    }}
    
    for(let item of map.values()){
        answer *= ( item + 1 ); //이터러블 객체이므로 for of 반복문 돌림 
    }
    
    return answer-1 ;
}