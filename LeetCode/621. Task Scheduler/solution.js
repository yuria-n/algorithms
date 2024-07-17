const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

// Priority Queue
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
function leastInterval(tasks, n) {
  const charCodeA = "A".charCodeAt(0);
  let counts = new Array(26).fill(0);
  tasks.forEach((task) => counts[task.charCodeAt(0) - charCodeA]++);

  const pq = new MaxPriorityQueue();
  counts.filter((count) => count > 0).forEach((count) => pq.enqueue(count));

  let interval = 0;

  while (!pq.isEmpty()) {
    counts = [];

    let time = n;
    while (time-- >= 0) {
      if (pq.isEmpty() && counts.length === 0) {
        break;
      }
      interval++;
      if (pq.isEmpty()) {
        continue;
      }
      const count = pq.dequeue().element;
      if (count > 1) {
        counts.push(count - 1);
      }
    }
    counts.forEach((count) => pq.enqueue(count));
  }

  return interval;
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
