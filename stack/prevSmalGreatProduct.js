// You need to output the product of these values , which is for each element it's prev smaller of prev greater in the array, assume -1 ifnext smaller or next greater does not exists.

runProgram(`1
6
5 1 6 2 5 1`);

function runProgram(input) {
    let ni = input.trim().split("\n");
    let t = +ni[0];
    for (let a = 1; a <= t; a++) {
        let arr = ni[a * 2].trim().split(" ").map(Number);
        let n = arr.length;
        let pgElemIndexes = prevGreat(arr, n);
        let psElements = prevSmal(arr, n);
        let prod = 1;
        for (let i = 0; i < n; i++) {
            if (pgElemIndexes[i] === -1) prod *= -1;
            else prod *= psElements[pgElemIndexes[i]];
        }
        console.log(prod);
    }
}
function prevGreat(arr, n) {
    let pgElemIndexes = Array(n).fill(0);
    pgElemIndexes[0] = -1;
    let stack = [0];
    for (let i = 1; i < n; i++) {
        while (arr[stack[stack.length - 1]] <= arr[i] && stack.length !== 0) {
            stack.pop();
        }
        if (stack.length === 0) pgElemIndexes[i] = -1;
        else pgElemIndexes[i] = stack[stack.length - 1];
        stack.push(i);
    }
    return pgElemIndexes;
}
function prevSmal(arr, n) {
    let psElements = Array(n).fill(0);
    psElements[0] = -1;
    let stack = [arr[0]];
    for (let i = 1; i < n; i++) {
        while (stack[stack.length - 1] >= arr[i] && stack.length !== 0) {
            stack.pop();
        }
        if (stack.length === 0) psElements[i] = -1;
        else psElements[i] = stack[stack.length - 1];
        stack.push(arr[i]);
    }
    return psElements;
}