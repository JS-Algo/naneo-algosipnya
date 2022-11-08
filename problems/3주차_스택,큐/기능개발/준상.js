// 배열로 큐 자료구조 구현
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(progresses, speeds) {
  let answer = [];
  const queue = new Queue();
  for (let i = 0; i < progresses.length; i++) {
    queue.enqueue(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  console.log(queue);

  while (queue.front !== queue.rear) {
    const frontValue = queue.peek();
    let num = 1;
    queue.dequeue();
    for (let i = queue.front; i < queue.rear; i++) {
      if (queue.queue[i] <= frontValue) {
        num++;
        queue.dequeue();
      } else {
        break;
      }
    }
    answer.push(num);
  }

  return answer;
}
