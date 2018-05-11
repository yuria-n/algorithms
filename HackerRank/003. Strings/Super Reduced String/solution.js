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

function super_reduced_string(s) {
  let result = '';

  let i = -1;
  while (++i < s.length) {
    const l = result.length;
    const c1 = result[l - 1];
    const c2 = s[i];
    if (c1 === c2) {
      result = result.substr(0, l - 1);
      continue;
    }
    result += c2;
  }

  return result || 'Empty String';
}

function main() {
  var s = readLine();
  var result = super_reduced_string(s);
  process.stdout.write('' + result + '\n');
}
