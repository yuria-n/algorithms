/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
  const offset = "a".charCodeAt(0);

  const counts1 = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    counts1[s1.charCodeAt(i) - offset]++;
  }
  const key1 = counts1.toString();

  const counts2 = new Array(26).fill(0);
  let left = 0;
  let right = -1;
  while (++right < s2.length) {
    counts2[s2.charCodeAt(right) - offset]++;
    const key2 = counts2.toString();
    const len = right - left + 1;
    if (len === s1.length && key2 === key1) {
      return true;
    }
    if (len < s1.length) {
      continue;
    }
    counts2[s2.charCodeAt(left) - offset]--;
    left++;
  }
  return false;
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion2(s1, s2) {
  const counts = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    counts[charCodeAt(s1, i)]++;
  }
  let left = 0;
  let right = 0;
  while (right < s2.length && right - left !== s1.length) {
    if (counts[charCodeAt(s2, right)] > 0) {
      counts[charCodeAt(s2, right++)]--;
      continue;
    }
    counts[charCodeAt(s2, left++)]++;
  }
  return right - left === s1.length;
}

function charCodeAt(s, i) {
  return s.charCodeAt(i) - 97;
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion3(s1, s2) {
  const map = new Map();
  addToMap(s1);

  let left = 0;
  let right = left;
  while (right < s2.length) {
    const cr = s2[right];
    if (!map.has(cr)) {
      if (left === right) {
        left++;
        right = left;
        continue;
      }
      addToMap(s2[left]);
      left++;
      continue;
    }
    if (map.get(cr) === 1) {
      map.delete(cr);
    } else {
      map.set(cr, map.get(cr) - 1);
    }
    if (map.size === 0) {
      return true;
    }
    right++;
  }
  return false;

  function addToMap(str) {
    for (const c of str) {
      map.set(c, (map.has(c) ? map.get(c) : 0) + 1);
    }
  }
}
