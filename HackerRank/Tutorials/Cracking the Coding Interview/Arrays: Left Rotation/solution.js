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
function leftRotation(k, arr) {
  const result = [];
  const l = arr.length;
  for (let i = k; i < l + k; i++) {
    result.push(arr[i % l]);
  }
  return result;
}

function leftRotation2(k, arr) {
  const result = [];
  const l = arr.length;
  for (let i = k; i < l + k; i++) {
    result.push(arr[i] || arr[i - l]);
  }
  return result;
}

function leftRotation3(k, arr) {
  const result = [];
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    result[i] = arr[i + k] ? arr[i + k] : arr[i + k - l - 1];
  }
  return result;
}

function main() {
  var n_temp = readLine().split(' ');
  var n = parseInt(n_temp[0]);
  var k = parseInt(n_temp[1]);
  a = readLine().split(' ');
  a = a.map(Number);

  console.log(leftRotation(k, a).join(' '));
}
