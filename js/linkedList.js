class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addElement(element) {
    let current;
    let node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(element, location) {
    let current, previous;
    let count = 0;
    let node = new Node(element);
    if (location < 0 || location > this.size) {
      console.log("Please enter a valid location value");
      return;
    } else {
      current = this.head;
      if (location === 0) {
        this.head = node;
        node.next = current;
      } else {
        while (count < location) {
          count++;
          previous = current;
          current = current.next;
        }
        previous.next = node;
        node.next = current;
      }
      this.size++;
    }
  }

  removeFrom(position) {
    let current,
      previous,
      count = 0;
    if (position < 0 || position >= this.size) {
      console.log("Please enter a valid index value");
    } else {
      current = this.head;
      previous = current;
      if (position == 0) {
        this.head = current.next;
      } else {
        while (count < position) {
          count++;
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.size--;
      return current.element;
    }
  }
  removeElement(element) {
    let current,
      previous,
      index = 0;
    current = this.head;
    while (current.element !== element) {
      if (current.next !== null) {
        previous = current;
        current = current.next;
        index++;
      } else {
        console.log("No such element");
        return -1;
      }
    }
    previous.next = current.next;
    this.size--;
    return true;
  }

  indexOf(element) {
    let current,
      index = 0;
    current = this.head;
    while (current.element !== element) {
      if (current.next !== null) {
        current = current.next;
        index++;
      } else {
        console.log("No such element");
        return;
      }
    }
    return index;
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
