// Solution 1: heap
// time: O(n log n)
class Heap {
  heap = [[]];

  constructor(points) {
    for (let i = 0; i < points.length; i++) {
      this.push(points[i], i);
    }
  }

  push([x, y], index) {
    this.heap.push([x * x + y * y, index]);

    let i1 = this.heap.length - 1;
    let i0 = Math.floor(i1 / 2);
    let val1 = this.heap[i1]?.[0];
    let val0 = this.heap[i0]?.[0] ?? Infinity;
    while (i0 > 0 && val1 < val0) {
      [this.heap[i0], this.heap[i1]] = [this.heap[i1], this.heap[i0]];
      i1 = i0;
      i0 = Math.floor(i1 / 2);
      val1 = this.heap[i1]?.[0];
      val0 = this.heap[i0]?.[0] ?? Infinity;
    }
  }

  pop() {
    const [, index] = this.heap[1];

    this.heap[1] = this.heap.pop();
    for (let ip = Math.floor(this.heap.length / 2); ip >= 0; ip--) {
      let i = ip;
      let il = 2 * i;
      let ir = il + 1;
      let val = this.heap[i][0];
      let valL = this.heap[il]?.[0];
      let valR = this.heap[ir]?.[0] ?? Infinity;
      while (il < this.heap.length && val > Math.min(valL, valR)) {
        if (valL < valR) {
          [this.heap[i], this.heap[il]] = [this.heap[il], this.heap[i]];
          i = il;
        } else {
          [this.heap[i], this.heap[ir]] = [this.heap[ir], this.heap[i]];
          i = ir;
        }
        il = 2 * i;
        ir = il + 1;
        val = this.heap[i][0];
        valL = this.heap[il]?.[0];
        valR = this.heap[ir]?.[0];
      }
    }

    return index;
  }
}

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
function kClosest(points, k) {
  const result = [];
  const heap = new Heap(points);
  for (let i = 0; i < k; i++) {
    result.push(points[heap.pop()]);
  }
  return result;
}

// Solution 2: sort
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const kClosest = function (points, K) {
  const distances = [];
  const map = new Map();

  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];
    const distance = x * x + y * y;
    distances.push(distance);
    const indices = map.get(distance) || [];
    indices.push(i);
    map.set(distance, indices);
  }

  distances.sort((n1, n2) => n2 - n1);

  const result = [];

  while (result.length < K) {
    const distance = distances.pop();
    for (const i of map.get(distance)) {
      result.push(points[i]);
    }
  }

  return result;
};
