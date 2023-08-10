class Node {
  constructor(name, length, path, pic) {
    this.musicNode = {
    
      name: name,
      length: length,
      path: path,
      pic: pic
    };
    this.prev = null;
    this.next = null;
  }
}

class DoubllyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.tempPos = null;
  }
 
  push( name, length, path, pic) {
    const newNode = new Node( name, length, path, pic);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  setDefaulltPointer() {
    this.tempPos = this.head;
  }

  traverse(direction) {
    if (direction === 1 && this.tempPos.next != null) {
      this.tempPos = this.tempPos.next;
      return this.tempPos.musicNode;
    } else if (direction === -1 && this.tempPos.prev != null) {
      this.tempPos = this.tempPos.prev;
      return this.tempPos.musicNode;
    } else {
      return 0;
    }
  }
  nodePosition() {
    if (this.tempPos.next == null) {
      return -1;
    } else if (this.tempPos.prev == null) {
      return 1;
    } else {
      return 0; 
    }
  }
}

const dll = new DoubllyLinkedList();
dll.push(
  "BELIEVER",
  1,
  "./audio/beleivesong.mp3",
  "./image/beleiver.jpg"
);
dll.push(
  "DANDELIONS",
  2,
  "./audio/Dandelions.mp3",
  "./image/dande.jpg"
);
dll.push(
  "CALM DOWN",
  3,
  "./audio/Calm-Down.mp3",
  "./image/cd.jpeg"
);
dll.push(
  "BONES",
  4,
  "./audio/BONES.mp3",
  "./image/bones.jpg"
);
dll.push(
  "ENEMY",
  5,
  "./audio/Enemy.mp3",
  "./image/enemy.jpeg"
);

dll.setDefaulltPointer();
