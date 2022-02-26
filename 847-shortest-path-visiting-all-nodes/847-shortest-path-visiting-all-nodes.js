/**
 * @param {number[][]} graph
 * @return {number}
 */

// Do level by level bfs, return the number of steps when the bitmask is full.
// e.g: if n is 5, the full bitmask should be 31 (11111).
// We can get this number by (1 << n) - 1. By subtracting 1, turns 100000 into 11111.

// For each node we visit, mark the bit (from the right) as 1.
// e.g: if the node is 2, we mark the bit 00010 as 1, and set the new mask to be: oldMask | (1 << node)

var shortestPathLength = function(graph) {
  let n = graph.length, fullBitmask = (1 << n) - 1;
  let queue = [], visited = new Set();
  for (var i = 0; i < n; i++) {
    queue.push([i, 1 << i]);
    visited.add(`${i},${1 << i}`);
  }

  let steps = 0;
  while (queue.length) {
    let next = [];
    while (queue.length) {
      let [node, bitmask] = queue.pop();
      if (bitmask === fullBitmask) return steps;
      for (var neighbor of graph[node]) {
        let newBitmask = bitmask | (1 << neighbor);
        if (!visited.has(`${neighbor},${newBitmask}`)) {
          next.push([neighbor, newBitmask]);
          visited.add(`${neighbor},${newBitmask}`);
        }
      }
    }
    queue = next;
    steps++;
  }
};