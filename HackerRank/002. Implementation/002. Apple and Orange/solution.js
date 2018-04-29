'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//   inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//   inputString = inputString
//     .trim()
//     .split('\n')
//     .map(str => str.trim());

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const result = [0, 0];

  apples.forEach(apple => {
    const p = a + apple;
    if (p >= s && p <= t) {
      result[0]++;
    }
  });

  oranges.forEach(orange => {
    const p = b + orange;
    if (p >= s && p <= t) {
      result[1]++;
    }
  });

  return result;
}

// function main() {
//   const st = readLine().split(' ');

//   const s = parseInt(st[0], 10);

//   const t = parseInt(st[1], 10);

//   const ab = readLine().split(' ');

//   const a = parseInt(ab[0], 10);

//   const b = parseInt(ab[1], 10);

//   const mn = readLine().split(' ');

//   const m = parseInt(mn[0], 10);

//   const n = parseInt(mn[1], 10);

//   const apple = readLine()
//     .split(' ')
//     .map(appleTemp => parseInt(appleTemp, 10));

//   const orange = readLine()
//     .split(' ')
//     .map(orangeTemp => parseInt(orangeTemp, 10));

//   console.log(countApplesAndOranges(s, t, a, b, apple, orange).join('\n'));
}
