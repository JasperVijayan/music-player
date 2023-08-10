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
  "ALONE",
  1,
  "./audio/alone.mp3",
  "./image/alone.jpg"
);
dll.push(
  "DARK SIDE",
  2,
  "./audio/dark.mp3",
  "./image/dark.jpg"
);
dll.push(
  "FADED",
  3,
  "./audio/faded.mp3",
  "./image/faded.jpg"
);
dll.push(
  "LILY",
  4,
  "./audio/lily.mp3",
  "./image/lily.jpg"
);
dll.push(
  "ON MY WAY",
  5,
  "./audio/omw.mp3",
  "./image/omw.jpg"
);
dll.push(
  "SPECTRE",
  6,
  "./audio/spectre.mp3",
  "./image/spectre.jpg"
);
dll.push(
  "SWEET DREAMS",
  7,
  "./audio/sweet.mp3",
  "./image/sweet.jpg"
);

dll.setDefaulltPointer();
