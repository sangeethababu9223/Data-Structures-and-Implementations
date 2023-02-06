class Stack {
  constructor(size = 10) {
    this.values = [];
    this.size = size;
  }
  push(item) {
    let length = this.values.length;
    if (length > this.size) {
      console.log("Stack is full");
    } else {
      if (this.values.length !== 0) {
        this.values[length] = item;
      } else {
        this.values[0] = item;
      }
    }
  }
  pop() {
    let length = this.values.length;
    let val = this.values[length - 1];
    this.values.splice(length - 1, 1);
    return val;
  }
  peek() {
    let length = this.values.length;
    return this.values[length - 1];
  }
  isFull() {
    return this.values.length === this.size;
  }
  isEmpty() {
    return this.values.length === 0;
  }
}
