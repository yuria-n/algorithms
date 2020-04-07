/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const map = new Map();
  for (const str of strs) {
    const counts = new Array(26).fill(0);
    for (const c of str) {
      counts[c.charCodeAt() - 97]++;
    }
    const key = counts.join('');
    const arr = map.get(key) || [];
    arr.push(str);
    map.set(key, arr);
  }
  return Array.from(map.values());
};

const groupAnagrams = function (strs) {
  const map = new Map();
  for (const str of strs) {
    const key = str.split('').sort().join('');
    const arr = map.get(key) || [];
    arr.push(str);
    map.set(key, arr);
  }
  return Array.from(map.values());
};
