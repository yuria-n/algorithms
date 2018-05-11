'use strict';

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0;

process.stdin.on('data', function(data) {
  input_stdin += data;
});

process.stdin.on('end', function() {
  input_stdin_array = input_stdin.split('\n');
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function kangaroo(x1, v1, x2, v2) {
  let first = x1 <= x2 ? x1 : x2;
  let second = first === x1 ? x2 : x1;
  const firstInterval = first === x1 ? v1 : v2;
  const secondInterval = second === x1 ? v1 : v2;

  if (firstInterval <= secondInterval) {
    return 'NO';
  }

  while (first <= second) {
    if (first === second) {
      return 'YES';
    }
    first += firstInterval;
    second += secondInterval;
  }

  return 'NO';
}

function main() {
  var x1_temp = readLine().split(' ');
  var x1 = parseInt(x1_temp[0]);
  var v1 = parseInt(x1_temp[1]);
  var x2 = parseInt(x1_temp[2]);
  var v2 = parseInt(x1_temp[3]);
  var result = kangaroo(x1, v1, x2, v2);
  process.stdout.write('' + result + '\n');
}
