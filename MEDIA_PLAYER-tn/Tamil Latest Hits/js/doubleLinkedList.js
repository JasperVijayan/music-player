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
  "ADHEERA",
  1,
  "./audio/adhee.mp3",
  "./image/adhee.jpg"
);
dll.push(
  "BEAST",
  2,
  "./audio/beast.mp3",
  "./image/beast.jpg"
);
dll.push(
  "ONCE UPON",
  3,
  "./audio/once.mp3",
  "./image/once.jpg"
);
dll.push(
  "THEETHALAPATHY",
  4,
  "./audio/thee.mp3",
  "./image/thee.jpeg"
);
dll.push(
  "TOOFAN",
  5,
  "./audio/toofan.mp3",
  "./image/toofan.jpg"
);

dll.push(
  "WASTED",
  6,
  "./audio/wasted.mp3",
  "./image/wasted.jpeg"
);

dll.setDefaulltPointer();
