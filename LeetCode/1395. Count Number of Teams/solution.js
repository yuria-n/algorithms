/**
 * @param {number[]} rating
 * @return {number}
 */
const numTeams = function(rating) {
  const l = rating.length;
  let result = 0;
  if (l < 3) {
    return result;
  }
  let i = 0;
  let j = i + 1;
  let k = j + 1;
  const team = [0, 0, 0];
  while (i < l - 2) {
    team[0] = rating[i];
    while (j < l - 1) {
      team[1] = rating[j];
      while (k < l) {
        team[2] = rating[k];
        const [a, b, c] = team;
        if ((a < b && b < c) || (a > b && b > c)) {
          result++;
        }
        k++;
      }
      j++;
      k = j + 1;
    }
    i++;
    j = i + 1;
    k = j + 1;
  }
  return result;
};
