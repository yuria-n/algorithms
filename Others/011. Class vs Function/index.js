class Val {
  constructor(num) {
    this.num = num;
  }

  value() {
    return this.num;
  }
}

function solution(A) {
  const arr = [];

  for (const num of A) {
    arr.push(new Val(num));
  }
  return arr;
}

const T = solution([1, 2]);

console.log(
  T[0].value() === 1,
  T[1].value() === 2,
  T[0].value === T[1].value,
  !T[0].hasOwnProperty('value'),
  !T[1].hasOwnProperty('value'),
);
