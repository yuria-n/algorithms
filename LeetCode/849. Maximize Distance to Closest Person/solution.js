/**
 * @param {number[]} seats
 * @return {number}
 */
const maxDistToClosest = function(seats) {
  let start = 0;
  let end = seats.length;
  const countLeft = () => {
    let count = 0;
    for (let i = 0; i < seats.length; i++) {
      const n = seats[i];
      if (n === 1) {
        start = i + 1;
        return count;
      }
      count++;
    }
  };
  const left = countLeft();

  const countRight = () => {
    let count = 0;
    for (let i = seats.length - 1; i >= 0; i--) {
      const n = seats[i];
      if (n === 1) {
        end = i + 1;
        return count;
      }
      count++;
    }
  };
  const right = countRight();

  const countMiddle = () => {
    let count = 0;
    let tmp = 1;
    for (let i = start; i < end; i++) {
      const n = seats[i];
      if (n === 1) {
        count = Math.max(count, Math.floor(tmp / 2));
        tmp = 1;
        continue;
      }
      tmp++;
    }
    return count;
  };
  const middle = countMiddle();

  return Math.max(Math.max(left, right), middle);
};
