class Node {
  constructor(val) {
    this.key = val;
    this.left = null;
    this.right = null;
  }
}

function inOrderTraversal(node) {
  if (node === null) return;
  inOrderTraversal(node.left);
  console.log(node.key);
  inOrderTraversal(node.right);
}

function postOrderTraversal(node) {
  if (node === null) return;
  postOrderTraversal(node.left);
  postOrderTraversal(node.right);
  console.log(node.key);
}
function preOrderTraversal(node) {
  if (node === null) return;
  console.log(node.key);
  preOrderTraversal(node.left);
  preOrderTraversal(node.right);
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log("pre-order");
preOrderTraversal(root);
console.log("post-order");
postOrderTraversal(root);
console.log("In-order");
inOrderTraversal(root);
