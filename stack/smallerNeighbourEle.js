// Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

// Mathematically,

// G[i] for an element A[i] is an element A[j] such that

// j is maximum possible AND

// j < i AND

// A[j] < A[i]

// Note: Elements for which no smaller element exist, consider next smaller element as -1.



runProgram(`8
39 27 11 4 24 32 32 1`);

// runProgram(`8
// 5 4 9 12 3`);

function runProgram(input) {
    let ni = input.split("\n");
    let arr = ni[1].trim().split(" ").map(Number);
    let n = arr.length;
    console.log(prevSmaller(arr, n).join(' '));
}

function prevSmaller(arr, n) {
    let stack = [0];
    let res = [-1];
    for (let i = 1; i < n; i++) {
        while (arr[stack[stack.length - 1]] >= arr[i] && stack.length !== 0) {
            stack.pop();
        }
        if (stack.length === 0) res.push(-1);
        else res.push(arr[stack[stack.length - 1]])
        // if (arr[i] % 2 === 0) {
            stack.push(i);
        // }
    }
    return res;
}

