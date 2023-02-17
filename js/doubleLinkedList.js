class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}
class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addElement(element) {
    let node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let current;
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
    }
    this.size++;
  }

  insertAt(element, location) {
    let node = new Node(element);
    if (location < 0 || location > this.size) {
      console.log("Invalid Index");
    } else {
      let current,
        previous,
        count = 0;
      current = this.head;
      if (location === 0) {
        node.next = current.next;
        this.head = node;
      } else {
        previous = current;
        while (count < location) {
          count++;
          previous = current;
          current = current.next;
        }
        node.prev = previous;
        previous.next = node;
        node.next = current;
      }
      this.size++;
    }
  }

  removeFrom(position) {
    if (position < 0 || position >= this.size) {
      console.log("Invalid index");
    } else {
      let current = this.head;
      let previous = current;
      let count = 0;
      if (position === 0) {
        this.head = current.next;
      } else {
        while (count < position) {
          count++;
          previous = current;
          current = current.next;
        }
        let nextAfter = current.next;
        previous.next = nextAfter;
        if (nextAfter) {
          nextAfter.prev = previous;
        }
      }
      this.size--;
    }
  }
  removeElement(element) {
    let current, previous, counter;
    current = this.head;
    previous = current;
    counter = 0;
    while (current.element !== element) {
      counter++;
      previous = current;
      current = current.next;
    }
    if (counter >= this.size) {
      console.log("Item not found");
    } else {
      let nextAfter = current.next;
      previous.next = nextAfter;
      if (nextAfter) {
        nextAfter.prev = previous;
      }
      this.size--;
    }
  }

  indexOf(element) {
    let current, counter;
    current = this.head;
    counter = 0;
    while (current.element !== element) {
      counter++;
      current = current.next;
    }
    if (counter >= this.size) {
      console.log("Item not found");
    } else {
      return counter;
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  sizeOfList() {
    return this.size;
  }

  printList() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.element + " ";
      current = current.next;
    }
    console.log(str);
  }
}
