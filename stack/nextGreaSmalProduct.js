

runProgram(`1
6
5 1 6 2 5 1`);

function runProgram(input) {
    let ni = input.trim().split("\n");
    let t = +ni[0];
    for (let a = 1; a <= t; a++) {
        let arr = ni[a * 2].trim().split(" ").map(Number);
        let n = arr.length;
        let nsElemIndexes = nextSmal(arr, n);
        let ngElements = nextGreat(arr, n);
        let prod = 1;
        for (let i = 0; i < n; i++) {
            if (nsElemIndexes[i] === -1) prod *= -1;
            else prod *= ngElements[nsElemIndexes[i]];
        }
        console.log(prod);
    }
}

function nextSmal(arr, n) {
    let nsElemIndexes = Array(n).fill(0);
    nsElemIndexes[n - 1] = -1;
    let stack = [n - 1];
    for (let i = n - 2; i >= 0; i--) {
        while (arr[stack[stack.length - 1]] >= arr[i] && stack.length !== 0) {
            stack.pop();
        }
        if (stack.length === 0) nsElemIndexes[i] = -1;
        else nsElemIndexes[i] = stack[stack.length - 1];
        stack.push(i);
    }
    return nsElemIndexes;
}

function nextGreat(arr, n) {
    let ngElements = Array(n).fill(0);
    ngElements[n - 1] = -1;
    let stack = [arr[n - 1]];
    for (let i = n - 2; i >= 0; i--) {
        while (stack[stack.length - 1] <= arr[i] && arr.length !== 0) {
            stack.pop();
        }
        if (stack.length === 0) ngElements[i] = -1;
        else ngElements[i] = stack[stack.length - 1]
        stack.push(arr[i]);
    }
    return ngElements;
}