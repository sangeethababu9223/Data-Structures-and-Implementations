// Find the distance between two nodes with given two keys - BST
class Node {
  constructor() {
    this.key = 0;
    this.left = null;
    this.right = null;
  }
}
function addNode(key) {
  let node = new Node();
  node.key = key;
  return node;
}
function insertNode(root, key) {
  if (root == null) {
    root = addNode(key);
  } else if (root.key > key) {
    root.left = insertNode(root.left, key);
  } else if (root.key < key) {
    root.right = insertNode(root.right, key);
  }
  return root;
}
function distanceFromRoot(root, key) {
  let res = 0;
  if (root.key > key) {
    res++;
    res += distanceFromRoot(root.left, key);
  } else if (root.key < key) {
    res++;
    res += distanceFromRoot(root.right, key);
  }
  return res;
}
function distanceBetweenNodes(root, a, b) {
  let distance = 0;
  if (root == null) return 0;
  if ((root.key < a && root.key > b) || (root.key < b && root.key > a)) {
    let distance1 = distanceFromRoot(root, a);
    let distance2 = distanceFromRoot(root, b);
    distance = distance1 + distance2;
  } else if (root.key < a && root.key < b) {
    distance = distanceBetweenNodes(root.right, a, b);
  } else if (root.key > a && root.key > b) {
    distance = distanceBetweenNodes(root.left, a, b);
  }
  return distance;
}
