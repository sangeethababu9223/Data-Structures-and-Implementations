class Node {
  constructor(val) {
    this.key = val;
    this.left = null;
    this.right = null;
  }
}
const bfs = (node, cb) => {
  if (node === null) return;
  let queue = [node];
  while (queue.length > 0) {
    let item = queue.shift();
    cb(item);
    if (item.left !== null) {
      queue.push(item.left);
    }
    if (item.right !== null) {
      queue.push(item.right);
    }
  }
};
const printNode = (node) => {
  console.log(node.key);
};
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
bfs(root, printNode);
