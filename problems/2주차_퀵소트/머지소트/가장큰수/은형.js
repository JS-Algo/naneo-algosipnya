function solution(numbers) {
    numbers.sort((a, b) => a.toString().repeat(3) < b.toString().repeat(3) ? 1 : -1);
    
    return parseInt(numbers.join('')) === 0 ? "0" : numbers.join('');
}