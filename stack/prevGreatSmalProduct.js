
// You need to output the product of these values , which is for each element it's prev greater of prev smaller in the array, assume -1 ifnext smaller or next greater does not exists.

runProgram(`1
6
5 1 6 2 5 1`);

function runProgram(input) {
    let ni = input.trim().split("\n");
    let t = +ni[0];
    for (let a = 1; a <= t; a++) {
        let arr = ni[a * 2].trim().split(" ").map(Number);
        let n = arr.length;
        let psElemIndexes = prevSmal(arr, n);
        let pgElements = prevGreat(arr, n);
        let prod = 1;
        for (let i = 0; i < n; i++) {
            if (psElemIndexes[i] === -1) prod *= -1;
            else prod *= pgElements[psElemIndexes[i]];
        }
        console.log(prod);
    }
}

function prevSmal(arr, n) {
    let psElemIndexes = Array(n).fill(0);
    psElemIndexes[0] = -1;
    let stack = [0];
    for (let i = 1; i <= n - 1; i++) {
        while (arr[stack[stack.length - 1]] >= arr[i] && stack.length !== 0) {
            stack.pop();
        }
        if (stack.length === 0) psElemIndexes[i] = -1;
        else psElemIndexes[i] = stack[stack.length - 1];
        stack.push(i);
    }
    return psElemIndexes;
}

function prevGreat(arr, n) {
    let pgElements = Array(n).fill(0);
    pgElements[0] = -1;
    let stack = [arr[0]];
    for (let i = 1; i < n; i++) {
        while (stack[stack.length - 1] <= arr[i] && stack.length !== 0) {
            stack.pop();
        }
        if (stack.length === 0) pgElements[i] = -1;
        else pgElements[i] = stack[stack.length - 1];
        stack.push(arr[i]);
    }
    return pgElements;
}