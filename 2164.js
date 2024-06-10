const fs = require("fs");
const input = fs.readFileSync("./input/2164.txt").toString().trim();

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // 요소를 리스트의 끝에 추가
  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // 리스트의 헤드에서 요소를 제거
  removeHead() {
    if (this.head === null) {
      return console.log("List is empty");
    } else {
      const removedData = this.head.data;
      this.head = this.head.next;
      this.size--;
      return removedData;
    }
  }

  // 리스트 출력
  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data;
      current = current.next;
    }
    console.log(result);
  }
}

const cards = new LinkedList();

for (let i = 1; i <= input; i++) {
  cards.add(i);
}

while (cards.size > 1) {
  cards.removeHead();
  cards.add(cards.head.data);
  cards.removeHead();
}

cards.printList();
