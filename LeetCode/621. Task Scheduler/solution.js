const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

// Priority Queue
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
function leastInterval(tasks, n) {
  let counts = new Array(26).fill(0);
  const charCodeA = "A".charCodeAt(0);
  for (const task of tasks) {
    counts[task.charCodeAt(0) - charCodeA]++;
  }

  let count = 0;
  const pq = new MaxPriorityQueue();
  counts.filter((val) => val > 0).forEach((val) => pq.enqueue(val));

  while (!pq.isEmpty()) {
    counts = [];

    let i = n;
    while (i-- >= 0) {
      if (pq.isEmpty() && counts.length === 0) {
        break;
      }
      count++;
      if (!pq.isEmpty()) {
        const val = pq.dequeue().element;
        if (val === 1) {
          continue;
        }
        counts.push(val - 1);
      }
    }

    counts.forEach((val) => pq.enqueue(val));
  }

  return count;
}

// Without Priority Queue
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
function leastInterval(tasks, n) {
  const charCodeA = "A".charCodeAt(0);
  const counts = Array(26).fill(0);
  let count = 0;
  for (let task of tasks) {
    const i = task.charCodeAt(0) - charCodeA;
    counts[i]++;
    if (counts[i] >= count) {
      count = counts[i];
    }
  }
  let time = (count - 1) * (n + 1);
  for (let task of counts) {
    if (task === count) {
      time++;
    }
  }
  return Math.max(tasks.length, time);
}
