class Node {
  constructor(val) {
    this.key = val;
    this.left = null;
    this.right = null;
  }
}

function inOrderTraversal(node, resultTree = []) {
  if (node !== null) {
    resultTree = inOrderTraversal(node.left, resultTree);
    resultTree = [...resultTree, node.key];
    resultTree = inOrderTraversal(node.right, resultTree);
  }
  return resultTree;
}

function preOrderTraversal(node, resultTree = []) {
  if (node !== null) {
    resultTree = [...resultTree, node.key];
    resultTree = preOrderTraversal(node.left, resultTree);
    resultTree = preOrderTraversal(node.right, resultTree);
  }
  return resultTree;
}

function postOrderTraversal(node, resultTree = []) {
  if (node !== null) {
    resultTree = postOrderTraversal(node.left, resultTree);
    resultTree = postOrderTraversal(node.right, resultTree);
    resultTree = [...resultTree, node.key];
  }
  return resultTree;
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
console.log(`In order: ${inOrderTraversal(root)}`);
console.log(`Pre order: ${preOrderTraversal(root)}`);
console.log(`post order: ${postOrderTraversal(root)}`);
