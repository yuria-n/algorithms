/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const map = new Map();
  for (const str of strs) {
    const counts = new Array(26).fill(0);
    for (const c of str) {
      counts[c.charCodeAt() - 97]++;
    }
    const key = counts.join("");
    const arr = map.get(key) || [];
    arr.push(str);
    map.set(key, arr);
  }
  return Array.from(map.values());
}

function groupAnagrams2(strs) {
  const map = new Map();
  for (const str of strs) {
    const key = str.split("").sort().join("");
    const arr = map.get(key) || [];
    arr.push(str);
    map.set(key, arr);
  }
  return Array.from(map.values());
}

function groupAnagrams3(strs) {
  const offset = 97;
  const map = new Map();
  for (const str of strs) {
    const arr = new Array(26).fill(0);
    for (const c of str) {
      arr[c.charCodeAt() - offset]++;
    }
    const key = arr.toString();
    if (!map.has(key)) {
      map.set(key, [str]);
      continue;
    }
    map.get(key).push(str);
  }
  return Array.from(map.values());
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams4(strs) {
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 107,
  ];
  const map = new Map();

  for (const str of strs) {
    let key = 1;
    for (const char of str) {
      key *= primes[char.charCodeAt() - 97];
    }
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }

  return Array.from(map.values());
}
