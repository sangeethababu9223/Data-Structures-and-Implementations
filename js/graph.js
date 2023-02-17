class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  printGraph() {
    let get_keys = this.adjList.keys();
    for (let i of get_keys) {
      let get_values = this.adjList.get(i);
      console.log(get_values);
      let conc = "";
      for (let j of get_values) {
        conc += j + " ";
      }
      console.log(`${i}->${conc}`);
    }
  }

  bfs(node) {
    let visited = {};
    visited[node] = true;
    let queue = [node];
    while (queue.length > 0) {
      let current = queue.shift();
      console.log(current);
      let get_values = this.adjList.get(current);
      for (let value of get_values) {
        if (!visited[value]) {
          queue.push(value);
          visited[value] = true;
        }
      }
    }
  }

  dfs(node) {
    let visited = {};
    this.dfsUtil(node, visited);
  }
  dfsUtil(vertex, visited) {
    visited[vertex] = true;
    console.log(vertex);
    let neighbor_list = this.adjList.get(vertex);
    for (let item of neighbor_list) {
      if (!visited[item]) {
        this.dfsUtil(item, visited);
      }
    }
  }
}

var g = new Graph(6);
var vertices = ["A", "B", "C", "D", "E", "F"];
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");
console.log("Print Graph");
g.printGraph();
console.log("BFS");
g.bfs("F");
console.log("DFS");
g.dfs("A");
