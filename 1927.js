const fs = require("fs");
const input = fs.readFileSync("./input/1927.txt").toString().trim().split("\n");

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parentIndex]) break;
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  dequeue() {
    if (this.isEmpty()) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }

  sinkDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let minIndex = index;
    const length = this.heap.length;

    if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[minIndex]) {
      minIndex = leftChildIndex;
    }

    if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[minIndex]) {
      minIndex = rightChildIndex;
    }

    if (minIndex !== index) {
      [this.heap[minIndex], this.heap[index]] = [this.heap[index], this.heap[minIndex]];
      this.sinkDown(minIndex);
    }
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }

  clear() {
    this.heap = [];
  }
}

const pq = new PriorityQueue();
const arr = input.map(Number);
const result = [];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] == 0) {
    if (pq.isEmpty()) {
      result.push(0);
    } else {
      result.push(pq.dequeue());
    }
  } else {
    pq.enqueue(arr[i]);
  }
}

console.log(result.join("\n"));
