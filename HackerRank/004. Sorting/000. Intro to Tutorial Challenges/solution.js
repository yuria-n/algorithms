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

/////////////// ignore above this line ////////////////////

function introTutorial(V, arr) {
  let result = -1;
  arr.forEach((n, i) => {
    if (V === n) {
      result = i;
    }
  });
  return result;
}

function main() {
  var V = parseInt(readLine());
  var n = parseInt(readLine());
  arr = readLine().split(' ');
  arr = arr.map(Number);
  var result = introTutorial(V, arr);
  process.stdout.write('' + result + '\n');
}
