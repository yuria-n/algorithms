process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function bubbleSort(arr) {
    let count = 0;
    let l = arr.length;
    while (--l > 0) {
        for (let i = 0; i < l; i++) {
            const j = i + 1;
            const a = arr[i];
            const b = arr[j];
            if (a > b) {
                arr[i] = b;
                arr[j] = a;
                count++;
            }
        }
    }

    return [count, arr[0], arr[arr.length - 1]];
}

function main() {
    var n = parseInt(readLine());
    var a = readLine().split(' ');
    var arr = a.map(Number);

    const [
        time,
        first,
        last
    ] = bubbleSort(arr);
    console.log(`Array is sorted in ${time} swaps.\nFirst Element: ${first}\nLast Element: ${last}`);
}