# ๊ทธ๋ํ


## ๐๊ทธ๋ํ๋?
![image](https://user-images.githubusercontent.com/69416561/204725091-9d386463-3620-4084-9a37-fb7cfaef09e1.png)

- ์๋ฃ, ๊ฐ์ฒด ๊ฐ์ ์ฐ๊ฒฐ๊ด๊ณ๋ฅผ ๋ํ๋ด๋ ๋น์ ํ ์๋ฃ๊ตฌ์กฐ์ด๋ค. 
- ์ด๋ค ์๋ฃ๋ฅผ ํฌํจํ๋ **์ ์ (Vertex)๊ณผ ์ ์  ๊ฐ์ ์ฐ๊ฒฐ๊ด๊ณ๋ฅผ ๋ํ๋ด๋ ๊ฐ์ (Edge, ===Arc)** ์ผ๋ก ์ด๋ฃจ์ด์ ธ์๋ค.
- ๋ค๋ฅธ Vertex๋ก๋ถํฐ ์ค๋ Edge์ ๊ฐฏ์๋ฅผ **์ง์์ฐจ์(In-degree)**, ๋ค๋ฅธ Vertex๋ก ๊ฐ๋ Edge์ ๊ฐฏ์๋ฅผ **์ง์ถ์ฐจ์(Out-Degree)** ๋ผ๊ณ  ํ๋ค. 


## ๐๊ทธ๋ํ์ ์ข๋ฅ
![image](https://user-images.githubusercontent.com/69416561/204730738-da50cf95-0880-48b3-9b9f-99f6d4b53b28.png)

- ๋ฌด๋ฐฉํฅ ๊ทธ๋ํ: (๊ฐ์ ์) ๋ฐฉํฅ์ด ์๋ ๊ทธ๋ํ
- ๋ฐฉํฅ ๊ทธ๋ํ: ๋ฐฉํฅ์ฑ์ด ์๋ ๊ทธ๋ํ
- ๊ฐ์ค์น ๊ทธ๋ํ: ๊ฐ์ ์ ๊ฐ์ค์น๊ฐ์ด ์กด์ฌํ๋ ๊ทธ๋ํ
- ๋ฃจํธ์๋ ํธ๋ฆฌ: ๊ฐ์ ์ ํตํด ์ ์  ๊ฐ ์๋ ๋ฐฉ๋ฒ์ด ํ๊ฐ์ง์ธ ๊ทธ๋ํ(*ํธ๋ฆฌ์ ์ ์)
- ์ด๋ถ ๊ทธ๋ํ: ๊ทธ๋ํ์ ์ ์ ์ ๊ฒน์น์ง ์๊ฒ ๋ ๊ทธ๋ฃน์ผ๋ก ๋๋ ํ ๋ค๋ฅธ ๊ทธ๋ฃน๋ผ๋ฆฌ๋ง ๊ฐ์ ์ด ์กด์ฌํ๊ฒ ๋ถํ ํ  ์ ์๋ ๊ทธ๋ํ
- ์ฌ์ดํด์ด ์๋ ๋ฐฉํฅ ๊ทธ๋ํ: ์ ์ ์์ ์ถ๋ฐํด ์๊ธฐ ์์ ์ผ๋ก ๋์์ค๋ ๊ฒฝ๋ก(์ฌ์ดํด)๊ฐ ์๋ ๊ทธ๋ํ
- ํด๋น ๊ทธ๋ํ ์ด์ธ์๋ ํ ์ ์ ์ด ๋ชจ๋  ์ ์ ๊ณผ ์ฐ๊ฒฐ๋ ์์  ๊ทธ๋ํ, ์ฐ๊ฒฐ๋์ง ์์ ์ ์ ์ด ์๋ ๋จ์  ๊ทธ๋ํ ๋ฑ ์ฌ๋ฌ ์ข๋ฅ๊ฐ ์๋ค. 

## ๐๊ทธ๋ํ์ ํํ
![image](https://user-images.githubusercontent.com/69416561/204733352-133220b3-7691-405c-bcb8-920e97fcdf62.png)

- ๊ทธ๋ํ๋ ์ถ์์ ์ธ ์๋ฃ๊ตฌ์กฐ์ด๊ธฐ ๋๋ฌธ์, ์ฐ๋ฆฌ๊ฐ ์ด๋ฅผ ์ค์ ๋ก ๊ตฌํํ ๋๋ **๋ฐฐ์ด, ์ฐ๊ฒฐ ๋ฆฌ์คํธ ์๋ฃ๊ตฌ์กฐ**๋ฅผ ํ์ฉํ๋ค.


### ์ธ์  ํ๋ ฌ: 2์ฐจ์ ๋ฐฐ์ด๋ก ์ ์  ๊ฐ์ ๊ฐ์ ์ ์กด์ฌ ์ฌ๋ถ๋ฅผ 1 ๋๋ 0์ผ๋ก ํ๊ธฐํ๋ ๋ฐฉ์ 
- ๊ฐ์ ์ ์์ ๋ฌด๊ดํ๊ฒ ํญ์ nยฒ ํฌ๊ธฐ์ 2์ฐจ์ ๋ฐฐ์ด์ด ํ์ํ๋ฏ๋ก ๋ฉ๋ชจ๋ฆฌ ๊ณต๊ฐ์ด ๋ญ๋น๋๋ค.
- 2์ฐจ์ ๋ฐฐ์ด์ ๋ชจ๋  ์ ์ ๋ค์ ๊ฐ์  ์ ๋ณด๊ฐ ์๊ธฐ ๋๋ฌธ์, **๋ ์ ์ ์ ์ฐ๊ฒฐํ๋ ๊ฐ์ ์ ์กฐํํ  ๋** O(1) ์๊ฐ๋ณต์ก๋๋ก ๊ฐ๋ฅํ๋ค.
- ๊ทธ๋ํ์ **๋ชจ๋  ๊ฐ์ ์ ์**๋ฅผ ์์๋ด๋ ค๋ฉด ์ธ์ ํ๋ ฌ ์ ์ฒด๋ฅผ ํ์ธํด์ผ ํ๋ฏ๋ก O(nยฒ)์ ์๊ฐ์ด ์์๋๋ค.
- ๊ฐ์ ์ด ๋ง์ด ์กด์ฌํ๋ ๋ฐ์ง ๊ทธ๋ํ์ผ ๊ฒฝ์ฐ ํจ๊ณผ์ ์ด๋ค.


### ์ฐ๊ฒฐ ๋ฆฌ์คํธ: ์ ์  ๊ฐ์๋งํผ ๋ฆฌ์คํธ๋ฅผ ๋ง๋ค์ด ๊ฐ๊ฐ์ ์ ์  ๋ฆฌ์คํธ์ ๊ฐ์ ์ ์ถ๊ฐํ๋ ๋ฐฉ์

- ๊ทธ๋ํ๋ฅผ ๋ํ๋ด๋ ๊ฐ์ฅ ์ผ๋ฐ์ ์ธ ๋ฐฉ์์ด๋ค.
- ์กด์ฌํ๋ ๊ฐ์ ๋ง ๊ด๋ฆฌํ๋ฉด ๋๋ฏ๋ก, ๋ฉ๋ชจ๋ฆฌ ์ฌ์ฉ์ธก๋ฉด์์ ๋ณด๋ค ํจ์จ์ ์ด๋ค.
- ๊ทธ๋ํ์ **๋ชจ๋  ๊ฐ์ ์ ์**๋ฅผ ์์๋ด๋ ค๋ฉด ๊ฐ ์ ์ ์ ํค๋ ๋ธ๋๋ถํฐ ๋ชจ๋  ์ธ์ ๋ฆฌ์คํธ๋ฅผ ํ์ํด์ผ ํ๋ฏ๋ก O(V+E)์ ์๊ฐ์ด ์์๋๋ค.
- **๋ ์ ์ ์ ์ฐ๊ฒฐํ๋ ๊ฐ์ ์ ์กฐํ**ํ๊ฑฐ๋ **์ ์ ์ ์ฐจ์**๋ฅผ ์๊ธฐ ์ํด์๋ ์ ์ ์ ์ธ์  ๋ฆฌ์คํธ๋ฅผ ํ์ํด์ผ ํ๋ฏ๋ก ์ ์ ์ ์ฐจ์๋งํผ์ ์๊ฐ์ด ํ์ํ๋ค. **O(degree(v))**


## ๐[JS] ๊ฐ์ฒด์ ํด๋์ค๋ก ๊ตฌํํ ๊ทธ๋ํ

### ๋ฌด๋ฐฉํฅ ๊ทธ๋ํ

```js
class UndirectedGraph {
  constructor() {
    this.edges = {};
  }
  // ์ ์  ์ถ๊ฐํ๊ธฐ
  addVertex(vertex) {
    this.edges[vertex] = {}; //
  }

  // ๊ฐ์  ์ถ๊ฐํ๊ธฐ
  addEdge(vertex1, vertex2, weight=0) {
    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
  }

  // ๊ฐ์  ์ญ์ ํ๊ธฐ
  removeEdge(vertex1, vertex2) {
    if (this.edges[vertex1] && this.edges[vertex1][vertex2] !== undefined) {
      delete this.edges[vertex1][vertex2];
    }
    if (this.edges[vertex2] && this.edges[vertex2][vertex1] !== undefined) {
      delete this.edges[vertex2][vertex1];
    }
  }

  // ์ ์  ์ญ์ ํ๊ธฐ (ํ๋์ ์ ์ ์ด ์ญ์ ๋  ๋๋ ๊ทธ ์ ์ ๊ณผ ์ฐ๊ฒฐ๋ ๊ฐ์ ์ด ์ญ์ ๋๋๊น ์๋ํธ ์ ์ ์์๋ ๊ทธ ๊ฐ์ ์ ์ง์์ค์ผ ํ๋ค.)
  removeVertex(vertex) {
    for (let adjacentVertex in this.edges[vertex]) {
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.edges[vertex];
  }
}

const graph1 = new UndirectedGraph();
graph1.addVertex(1);
graph1.addVertex(2);
graph1.addVertex(3);
graph1.addVertex(4);
graph1.addVertex(5);
graph1.addEdge(1, 2, 1);
graph1.addEdge(1, 5, 88);
graph1.addEdge(2, 3, 8);
graph1.addEdge(3, 4, 10);
graph1.addEdge(4, 5, 100);
console.log(graph1.edges);

const graph2 = new UndirectedGraph();
graph2.addVertex(1);
graph2.addVertex(2);
graph2.addVertex(3);
graph2.addVertex(4);
graph2.addVertex(5);
graph2.addEdge(1, 2, 1);
graph2.addEdge(1, 5, 88);
graph2.addEdge(2, 3, 8);
graph2.addEdge(3, 4, 10);
graph2.addEdge(4, 5, 100);
graph2.removeVertex(5);
graph2.removeVertex(1);
graph2.removeEdge(2, 3);
console.log(graph2.edges);

```
![image](https://user-images.githubusercontent.com/69416561/204750846-970066ec-dff0-4e92-b95d-9c91584bff0a.png)
![image](https://user-images.githubusercontent.com/69416561/204750934-390d46f7-a1a1-4d22-88ad-0591d273ecb3.png)

- ์์ ๊ทธ๋ฆผ์ graph1์ ๊ตฌํ ๊ฒฐ๊ณผ์ด๊ณ , ์๋ ๊ทธ๋ฆผ์ ๊ทธ๋ํ2์ ๊ตฌํ ๊ฒฐ๊ณผ์ด๋ค.

### ๋ฐฉํฅ ๊ทธ๋ํ

```js

class DirectedGraph {
  constructor() {
    this.edges = {};
  }
  //์ ์ ์ ์ถ๊ฐํ๋ ๋ฉ์๋
  addVertex(vertex) {
    this.edges[vertex] = {};
  }
  //๊ฐ์ ์ ์ถ๊ฐํ๋ ๋ฉ์๋
  addEdge(departure, destination, weight=0) {
    // ์์ ์ ์ , ๋์ฐฉ ์ ์ , ๊ฐ์ค์น
    this.edges[departure][destination] = weight;
  }
}
const graph1 = new DirectedGraph();
graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addEdge("A", "B", 1);
graph1.addEdge("B", "C", 2);
graph1.addEdge("C", "A", 3);
console.log(graph1.edges);

```
![image](https://user-images.githubusercontent.com/69416561/204751187-8ed4a9a2-ee7e-4473-a157-6f2264034b43.png)


# BFS, DFS 

## ๐ ๊ทธ๋ํ ํ์ ์๊ณ ๋ฆฌ์ฆ

- ๊ทธ๋ํ ์๋ฃ๊ตฌ์กฐ ๋ด์ ํน์  ๊ฐ์ฒด๋ฅผ ์ฐพ๊ธฐ ์ํ ์๊ณ ๋ฆฌ์ฆ์ด๋ค.
- ๋ํ์ ์ธ ๊ทธ๋ํ ํ์ ์๊ณ ๋ฆฌ์ฆ์๋ **BFS, DFS**๊ฐ ์๋ค.
- ๋๋ผ๋ง ์์ฒญ์ ๋น์ ๋ฅผ ํ์๋ฉด, DFS๋ ํ ์๋ฆฌ์ฆ๋ฅผ ๋๊น์ง ๋ณธ ํ ๋ค๋ฅธ ์๋ฆฌ์ฆ๋ฅผ ๋ณด๋๊ฒ, BFS๋ ๋ณด๊ณ ์ถ์ ๋ชจ๋  ๋๋ผ๋ง๋ฅผ ํํ์ฉ ๋ฒ๊ฐ์๊ฐ๋ฉฐ ๋ณด๋ ๋๋์ผ๋ก ์ดํดํ  ์ ์๋ค. 
- ๊ทธ๋ํ ํ์ ์๊ณ ๋ฆฌ์ฆ์ ํ์ฉํ ์ฝํ ๋ฌธ์  ์ ํ์๋ 1. ๊ฒฝ๋กํ์(์ต๋จ๊ฑฐ๋ฆฌ, ์๊ฐ) 2.์ฐ๊ฒฐ ์ ๋ฌด ํ๋จ, ๋ถ๋ถ ๊ทธ๋ํ ์ฐพ๊ธฐ 3.๊ฐ๋ฅํ ๋ชจ๋  ์กฐํฉ ๋ง๋ค๊ธฐ์ ์ ํ๋ค์ด ์ฃผ๋ก ์ถ์ ๋๋ค.


### DFS

![image](https://user-images.githubusercontent.com/69416561/204779769-ae9bcde9-5f2a-4faa-acc1-0714a76bd2f3.png)

- Depth-First-Search ์ ์ฝ์๋ก, ๊ณ์ธต์ด ์๋ ์์์ ์ฐ์ ์ผ๋ก ํ์ํ๋ค.
- ์ฃผ๋ก **์คํ, ์ฌ๊ทํจ์**๋ฅผ ํ์ฉํด์ ๊ตฌํํ๋ค.
- ์ต์์ ๋ธ๋(=์ ์ , ๋ฒํ์ค)์์ ์ฐ๊ฒฐ๋ ์์ ๋ธ๋๋ฅผ ๋ชจ๋ ํ์ํ ํ, ๋ ์ด์ ์์ ๋ธ๋๊ฐ ์์ ๋ ์ธ์ ํ ์์ ๋ธ๋์ ํ์  ๋ธ๋๋ฅผ ๋ฐฉ๋ฌธํ๋ค. 
- ํด๋น ํ์  ๋ธ๋์์๋ ์์ ๋ธ๋๋ฅผ ํ์ํ๊ณ , ๋ ์ด์ ์์๋ธ๋๊ฐ ์์ ๊ฒฝ์ฐ ๋ค์ ์ธ์ ํ ์์ ํ์ ์ ๋ธ๋๋ฅผ ๋ฐฉ๋ฌธํ๋ ์๊ณ ๋ฆฌ์ฆ์ด๋ค.
- ๋ชจ๋  ์ ์ ๋ค์ ๋ฐฉ๋ฌธํ๊ณ ์ ํ  ๊ฒฝ์ฐ ์ฌ์ฉํ๋ค.

### DFS ์์  - ํ๊ฒ ๋๋ฒ

![image](https://user-images.githubusercontent.com/69416561/204791913-4dbfd52c-daf5-4aaf-a1e0-afd4eefcca37.png)


๋ชจ๋  ๊ฒฝ์ฐ์ ์๋ฅผ ๋ฐ์ ธ๋ด์ผํ๋ฏ๋ก(๋ชจ๋  ์ ์ ์ ๋ฐฉ๋ฌธํด์ผํ๋ฏ๋ก), DFS๋ก ๊ตฌํํ๋๊ฒ์ด ๋ซ๋ค.

```js
function solution(numbers, target) {
    var answer = 0;
  // ์ฒ์ ์์์ ๊ฐ์ 0๊ฐ, ํฉ๊ณ 0 ์ผ๋ก ์์ํ๋ฉด์ ๋ชจ๋  ๊ฒฝ์ฐ๋ฅผ dfs๋ก ํ์
    recur(0, 0);
    return answer;

    function recur(index, sum){
      // leaf node ๋์ฐฉํ์ ๋, ๋ชจ๋  numbers ํ์
        if( index === numbers.length){
          // ์ฃผ์ด์ง ์กฐ๊ฑด์ ๋ง์กฑํ๋ฉด answer++
            if(sum === target ){
                answer++
            }
          // ๋ฆฌํดํด์ฃผ์ด์ผํจ
            return
        }

      // left child ๋ +์ผ ๊ฒฝ์ฐ
        recur(index+1, sum+numbers[index]);
      // right child ๋ -์ผ ๊ฒฝ์ฐ
        recur(index+1, sum-numbers[index]);
    }
}
```
**์คํ ์์**

ํด๋น ๋ฌธ์ ์ 1๋ฒ ํ์คํธ ์ผ์ด์ค ๊ธฐ์ค

![image](https://user-images.githubusercontent.com/69416561/204794329-a55e55d1-f9d5-47cd-a2e5-121de297c50e.png)


1. 14๋ฒ ๋ผ์ธ `recur(index+1, sum+numbers[index])` ๋ถ๋ถ์ด ๊ณ์ ์คํ๋๋ฉฐ ๋ค์ ์ธ๋ฑ์ค์ ์ซ์๊ฐ (+) ์ธ ์์ ๋ธ๋๋ฅผ ๊ณ์ ํ์ํ๋ค.
2. ์ ์ ๊น์ง ํ์ํ์ ๊ฒฝ์ฐ(index = 5, sum = 5 ์ผ ๋) ํด๋น ํจ์๋ฅผ ์คํ์์ ์ ๊ฑฐํ ๋ค, index๊ฐ 4์ผ ๋ `recur(index + 1, sum โ numbers[index])` ์ ์คํํ์ฌ (-)์ธ ์์ ๋ธ๋๋ฅผ ํ์ํ๋ค. 
3. ํ ์ ์ ๊น์ง ํ์ํ์ผ๋ฏ๋ก ๋ค์ ํด๋น ํจ์๋ฅผ ์คํ์์ ์ ๊ฑฐ, index๊ฐ 3์ผ ๋ `recur(index + 1, sum โ numbers[index])` ์ ์คํํ๋ค.
4. index 4๊ฐ (-)์ผ ๋ `recur(index + 1, sum + numbers[index])`์ ์คํํ์ฌ index 5๊ฐ (+)์ธ ๊ฒฝ์ฐ์ ์์์ ํ์ํ๋ค.
5. ํด๋น ํ์์ ๋ง์น๋ฉด ํด๋น ํจ์๋ฅผ ์คํ์์ ์ ๊ฑฐํ ๋ค `recur(index + 1, sum โ numbers[index])`์ ์คํํ์ฌ index 5๊ฐ (-)์ธ ๊ฒฝ์ฐ์ ์์์ ํ์ํ๋ค.
6. ๋ค์ index๊ฐ 2์ผ ๋ `recur(index + 1, sum โ numbers[index])`์ ์คํ, index 3์ด (-)์ผ ๋ 14๋ฒ ๋ผ์ธ์ ์คํํ์ฌ index 4๊ฐ (+)์ธ ๊ฒฝ์ฐ์ ์์ ๋ธ๋๋ฅผ ๋ชจ๋ ํ์ ํ 15๋ฒ ๋ผ์ธ์ ์คํํ๋ฉฐ index 5๊ฐ (-)์ธ ๊ฒฝ์ฐ์ ์์ ๋ธ๋๋ฅผ ํ์ํ๋ค.
7. (+)์ ์์ ๋ธ๋ ํ์ โ (-)์ ์์ ๋ธ๋ ํ์ ์์๋ก ์ ๊ณผ์ ์ด ์งํ๋๋ฉฐ, index 1์ด (-)์ผ ๋์ ์์ ๋ธ๋์ ๊ฒฝ์ฐ์ ์ (+), (-) ๋ฅผ ๋ชจ๋ ํ์ํ๋ฉด ํด๋น ํจ์๊ฐ ์ข๋ฃ๋๋ค.

```
[+1, +1, +1, +1, +1]
[+1, +1, +1, +1, -1]
[+1, +1, +1, -1, +1]
[+1, +1, +1, -1, -1]
[+1, +1, -1, +1, +1]
[+1, +1, -1, +1, -1]
[+1, +1, -1, -1, +1]
[+1, +1, -1, -1, -1]
.
.
.

```

๋ฐฐ์ด๋ก ํ์ด๋ณด๋ฉด ํด๋น๊ณผ๊ฐ์ ๊ณผ์ ์ผ๋ก ์ฌ๊ท๋ฅผ ๋ฐ๋ณตํ๊ฒ ๋๋ค. 



### BFS 

![image](https://user-images.githubusercontent.com/69416561/204781114-669f51b1-212a-4f93-ba82-6da49c92d646.png)


- Breadth-First-Search์ ์ฝ์๋ก, ์์๋ณด๋ค ์ธต์๋ฅผ ์ฐ์ ์ ์ผ๋ก ๋น๊ตํ๋ฉด์ ํ์ํ๋ค.
- ์ฃผ๋ก **ํ** ์๋ฃ๊ตฌ์กฐ๋ก ๊ตฌํํ๋ค.
- ๊ทธ๋ํ๋ ํธ๋ฆฌ์์ ํ์์ ๋ฒํ์ค๋ฅผ ๊บผ๋ธ ๋ค์ ํด๋น ๋ฒํ์ค์ ์ธ์  ๋ฒํ์ค ์ค ๋ฐฉ๋ฌธํ์ง ์์ ๋ฒํ์ค๋ฅผ ๋ชจ๋ ํ์ ์ฝ์ํ๊ณ  ๋ฐฉ๋ฌธ์ฒ๋ฆฌํ๋ค.
- ์์์ ์ ์ ์ด๋ ์ต๋จ ๊ฑฐ๋ฆฌ๋ฅผ ๊ตฌํ๋ ๋ฌธ์ ์์ ์์ฃผ ์ฐ์ธ๋ค.


#### BFS ์์  - ๊ฒ์ ๋งต ์ต๋จ๊ฑฐ๋ฆฌ

https://school.programmers.co.kr/learn/courses/30/lessons/1844

![image](https://user-images.githubusercontent.com/69416561/204796200-6a9d58af-3756-450a-a44a-c566ec3ab970.png)

https://hogumachu.tistory.com/9
