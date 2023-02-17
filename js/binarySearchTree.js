class Node {
  constructor(key, val) {
    this.key = key;
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(element) {
    let node = new Node();
    if (this.root === null) {
      this.root = node;
    } else {
      insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (root.key < node.key) {
      if (root.left == null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right == null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }
}
