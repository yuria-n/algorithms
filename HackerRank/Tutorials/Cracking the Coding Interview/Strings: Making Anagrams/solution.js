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

function makingAnagrams(stringA, stringB) {
    const la = stringA.length;
    const lb = stringB.length;
    let count = la + lb;
    const map = {};
    for (let i = 0; i < la; i++) {
        const str = stringA[i];
        map[str] = ++map[str] || 1;
    }
    for (let i = 0; i < lb; i++) {
        const str = stringB[i];
        if (!map[str]) {
            continue;
        }
        map[str]--;
        count -= 2;
    }
    return count;
}

function main() {
    var a = readLine();
    var b = readLine();
    console.log(makingAnagrams(a, b));
}