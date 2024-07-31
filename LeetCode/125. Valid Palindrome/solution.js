/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return s === s.split("").reverse().join("");
}

function isPalindrome(s) {
  s = s.toLowerCase().replace(/\W/g, "");
  const l = s.length;
  for (let i = 0; i < parseInt(l / 2); i++) {
    if (s[i] !== s[l - i - 1]) {
      return false;
    }
  }
  return true;
}

function isPalindrome(s) {
  const regex = /[0-9a-z]/;
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const charL = s[left].toLowerCase();
    if (!regex.test(charL)) {
      left++;
      continue;
    }
    const charR = s[right].toLowerCase();
    if (!regex.test(charR)) {
      right--;
      continue;
    }
    if (charL === charR) {
      left++;
      right--;
      continue;
    }
    return false;
  }
  return true;
}
