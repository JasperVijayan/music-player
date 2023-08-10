class Node {
  constructor(name, length, path, image) {
    this.musicNode = {
    
      name: name,
      length: length,
      path: path,
      image: image,
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
 
  push( name, length, path,image) {
    const newNode = new Node( name, length, path,image);
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
  "SEMMOZHI",
  1,
  "SemMozhi.mp3",
  "tamil.jpg"
);
dll.push(
  "INDRAE VIDIYAL",
  2,
  "indrae.mp3"
);
dll.push(
  "VANTEMATARAM",
  3,
  "Vande Mataram.mp3"
);
dll.push(
  "THAMIZHA",
  5,
  "Thamizha Thamizha.mp3"
);

dll.setDefaulltPointer();