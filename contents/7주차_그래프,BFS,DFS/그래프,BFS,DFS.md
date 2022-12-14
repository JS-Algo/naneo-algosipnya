# 그래프


## 📌그래프란?
![image](https://user-images.githubusercontent.com/69416561/204725091-9d386463-3620-4084-9a37-fb7cfaef09e1.png)

- 자료, 개체 간의 연결관계를 나타내는 비선형 자료구조이다. 
- 어떤 자료를 포함하는 **정점(Vertex)과 정점 간의 연결관계를 나타내는 간선(Edge, ===Arc)** 으로 이루어져있다.
- 다른 Vertex로부터 오는 Edge의 갯수를 **진입차수(In-degree)**, 다른 Vertex로 가는 Edge의 갯수를 **진출차수(Out-Degree)** 라고 한다. 


## 📌그래프의 종류
![image](https://user-images.githubusercontent.com/69416561/204730738-da50cf95-0880-48b3-9b9f-99f6d4b53b28.png)

- 무방향 그래프: (간선의) 방향이 없는 그래프
- 방향 그래프: 방향성이 있는 그래프
- 가중치 그래프: 간선의 가중치값이 존재하는 그래프
- 루트없는 트리: 간선을 통해 정점 간 잇는 방법이 한가지인 그래프(*트리의 정의)
- 이분 그래프: 그래프의 정점을 겹치지 않게 두 그룹으로 나눈 후 다른 그룹끼리만 간선이 존재하게 분할할 수 있는 그래프
- 사이클이 없는 방향 그래프: 정점에서 출발해 자기 자신으로 돌아오는 경로(사이클)가 없는 그래프
- 해당 그래프 이외에도 한 정점이 모든 정점과 연결된 완전 그래프, 연결되지 않은 정점이 있는 단절 그래프 등 여러 종류가 있다. 

## 📌그래프의 표현
![image](https://user-images.githubusercontent.com/69416561/204733352-133220b3-7691-405c-bcb8-920e97fcdf62.png)

- 그래프는 추상적인 자료구조이기 때문에, 우리가 이를 실제로 구현할때는 **배열, 연결 리스트 자료구조**를 활용한다.


### 인접 행렬: 2차원 배열로 정점 간의 간선의 존재 여부를 1 또는 0으로 표기하는 방식 
- 간선의 수와 무관하게 항상 n² 크기의 2차원 배열이 필요하므로 메모리 공간이 낭비된다.
- 2차원 배열에 모든 정점들의 간선 정보가 있기 때문에, **두 정점을 연결하는 간선을 조회할 때** O(1) 시간복잡도로 가능하다.
- 그래프의 **모든 간선의 수**를 알아내려면 인접행렬 전체를 확인해야 하므로 O(n²)의 시간이 소요된다.
- 간선이 많이 존재하는 밀집 그래프일 경우 효과적이다.


### 연결 리스트: 정점 개수만큼 리스트를 만들어 각각의 정점 리스트에 간선을 추가하는 방식

- 그래프를 나타내는 가장 일반적인 방식이다.
- 존재하는 간선만 관리하면 되므로, 메모리 사용측면에서 보다 효율적이다.
- 그래프의 **모든 간선의 수**를 알아내려면 각 정점의 헤더 노드부터 모든 인접리스트를 탐색해야 하므로 O(V+E)의 시간이 소요된다.
- **두 정점을 연결하는 간선을 조회**하거나 **정점의 차수**를 알기 위해서는 정점의 인접 리스트를 탐색해야 하므로 정점의 차수만큼의 시간이 필요하다. **O(degree(v))**


## 📌[JS] 객체와 클래스로 구현한 그래프

### 무방향 그래프

```js
class UndirectedGraph {
  constructor() {
    this.edges = {};
  }
  // 정점 추가하기
  addVertex(vertex) {
    this.edges[vertex] = {}; //
  }

  // 간선 추가하기
  addEdge(vertex1, vertex2, weight=0) {
    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
  }

  // 간선 삭제하기
  removeEdge(vertex1, vertex2) {
    if (this.edges[vertex1] && this.edges[vertex1][vertex2] !== undefined) {
      delete this.edges[vertex1][vertex2];
    }
    if (this.edges[vertex2] && this.edges[vertex2][vertex1] !== undefined) {
      delete this.edges[vertex2][vertex1];
    }
  }

  // 정점 삭제하기 (하나의 정점이 삭제될 때는 그 정점과 연결된 간선이 삭제되니까 상대편 정점에서도 그 간선을 지워줘야 한다.)
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

- 위의 그림은 graph1의 구현 결과이고, 아래 그림은 그래프2의 구현 결과이다.

### 방향 그래프

```js

class DirectedGraph {
  constructor() {
    this.edges = {};
  }
  //정점을 추가하는 메서드
  addVertex(vertex) {
    this.edges[vertex] = {};
  }
  //간선을 추가하는 메서드
  addEdge(departure, destination, weight=0) {
    // 시작 정점, 도착 정점, 가중치
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

## 📌 그래프 탐색 알고리즘

- 그래프 자료구조 내의 특정 개체를 찾기 위한 알고리즘이다.
- 대표적인 그래프 탐색 알고리즘에는 **BFS, DFS**가 있다.
- 드라마 시청에 비유를 하자면, DFS는 한 시리즈를 끝까지 본 후 다른 시리즈를 보는것, BFS는 보고싶은 모든 드라마를 한화씩 번갈아가며 보는 느낌으로 이해할 수 있다. 
- 그래프 탐색 알고리즘을 활용한 코테 문제 유형에는 1. 경로탐색(최단거리, 시간) 2.연결 유무 판단, 부분 그래프 찾기 3.가능한 모든 조합 만들기의 유형들이 주로 출제된다.


### DFS

![image](https://user-images.githubusercontent.com/69416561/204779769-ae9bcde9-5f2a-4faa-acc1-0714a76bd2f3.png)

- Depth-First-Search 의 약자로, 계층이 아닌 자식을 우선으로 탐색한다.
- 주로 **스택, 재귀함수**를 활용해서 구현한다.
- 최상위 노드(=정점, 버텍스)에서 연결된 자식 노드를 모두 탐색한 후, 더 이상 자식 노드가 없을 때 인접한 상위 노드의 형제 노드를 방문한다. 
- 해당 형제 노드에서도 자식 노드를 탐색하고, 더 이상 자식노드가 없을 경우 다시 인접한 상위 형제의 노드를 방문하는 알고리즘이다.
- 모든 정점들을 방문하고자 할 경우 사용한다.

### DFS 예제 - 타겟 넘버

![image](https://user-images.githubusercontent.com/69416561/204791913-4dbfd52c-daf5-4aaf-a1e0-afd4eefcca37.png)


모든 경우의 수를 따져봐야하므로(모든 정점을 방문해야하므로), DFS로 구현하는것이 낫다.

```js
function solution(numbers, target) {
    var answer = 0;
  // 처음 시작은 개수 0개, 합계 0 으로 시작하면서 모든 경우를 dfs로 탐색
    recur(0, 0);
    return answer;

    function recur(index, sum){
      // leaf node 도착했을 때, 모든 numbers 탐색
        if( index === numbers.length){
          // 주어진 조건에 만족하면 answer++
            if(sum === target ){
                answer++
            }
          // 리턴해주어야함
            return
        }

      // left child 는 +일 경우
        recur(index+1, sum+numbers[index]);
      // right child 는 -일 경우
        recur(index+1, sum-numbers[index]);
    }
}
```
**실행 순서**

해당 문제의 1번 테스트 케이스 기준

![image](https://user-images.githubusercontent.com/69416561/204794329-a55e55d1-f9d5-47cd-a2e5-121de297c50e.png)


1. 14번 라인 `recur(index+1, sum+numbers[index])` 부분이 계속 실행되며 다음 인덱스의 숫자가 (+) 인 자식 노드를 계속 탐색한다.
2. 정점까지 탐색했을 경우(index = 5, sum = 5 일 때) 해당 함수를 스택에서 제거한 뒤, index가 4일 때 `recur(index + 1, sum — numbers[index])` 을 실행하여 (-)인 자식 노드를 탐색한다. 
3. 한 정점까지 탐색했으므로 다시 해당 함수를 스택에서 제거, index가 3일 때 `recur(index + 1, sum — numbers[index])` 을 실행한다.
4. index 4가 (-)일 때 `recur(index + 1, sum + numbers[index])`을 실행하여 index 5가 (+)인 경우의 자식을 탐색한다.
5. 해당 탐색을 마치면 해당 함수를 스택에서 제거한 뒤 `recur(index + 1, sum — numbers[index])`을 실행하여 index 5가 (-)인 경우의 자식을 탐색한다.
6. 다시 index가 2일 때 `recur(index + 1, sum — numbers[index])`을 실행, index 3이 (-)일 때 14번 라인을 실행하여 index 4가 (+)인 경우의 자식 노드를 모두 탐색 후 15번 라인을 실행하며 index 5가 (-)인 경우의 자식 노드를 탐색한다.
7. (+)의 자식 노드 탐색 → (-)의 자식 노드 탐색 순서로 위 과정이 진행되며, index 1이 (-)일 때의 자식 노드의 경우의 수 (+), (-) 를 모두 탐색하면 해당 함수가 종료된다.

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

배열로 풀어보면 해당과같은 과정으로 재귀를 반복하게 된다. 



### BFS 

![image](https://user-images.githubusercontent.com/69416561/204781114-669f51b1-212a-4f93-ba82-6da49c92d646.png)


- Breadth-First-Search의 약자로, 자식보다 층위를 우선적으로 비교하면서 탐색한다.
- 주로 **큐** 자료구조로 구현한다.
- 그래프나 트리에서 큐에서 버텍스를 꺼낸 뒤에 해당 버텍스의 인접 버텍스 중 방문하지 않은 버텍스를 모두 큐에 삽입하고 방문처리한다.
- 임의의 정점이나 최단 거리를 구하는 문제에서 자주 쓰인다.


#### BFS 예제 - 게임 맵 최단거리

https://school.programmers.co.kr/learn/courses/30/lessons/1844

![image](https://user-images.githubusercontent.com/69416561/204796200-6a9d58af-3756-450a-a44a-c566ec3ab970.png)

https://hogumachu.tistory.com/9
