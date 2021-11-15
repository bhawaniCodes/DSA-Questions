// Given an array of N elements,find the next smaller of next greater elementof every element in array, assume -1 if next smaller or next greater does not exists. Refer to the sample I/O for better understanding.
// You need to output the product of these values , which is for each element it's next smaller of next greater in the array, assume -1 ifnext smaller or next greater does not exists.

runProgram(`1
6
5 1 6 2 5 1`);

function runProgram(input) {
    let ni = input.trim().split("\n");
    let t = +ni[0];
    for (let a = 1; a <= t; a++) {
        let arr = ni[a * 2].trim().split(" ").map(Number);
        let n = arr.length;
        let ngElemIndexes = nextGreat(arr, n);
        let nsElements = nextSmal(arr, n);
        let prod = 1;
        for (let i = 0; i < ngElemIndexes.length; i++) {
            if (ngElemIndexes[i] === -1) prod *= -1;
            else prod *= nsElements[ngElemIndexes[i]];
        }
        console.log(prod);
    }
}
function nextGreat(arr, n) {
    let ngElemIndexes = Array(n).fill(0);
    ngElemIndexes[n - 1] = -1;
    let stack = [n - 1];
    for (let i = n - 2; i >= 0; i--) {
        while (arr[stack[stack.length - 1]] <= arr[i] && stack.length !== 0) {
            stack.pop();
        }
        if (stack.length === 0) {
            ngElemIndexes[i] = -1;
        } else ngElemIndexes[i] = stack[stack.length - 1];
        stack.push(i);
    }
    return ngElemIndexes;
}

function nextSmal(arr, n) {
    let nsElements = Array(n).fill(0);
    nsElements[n - 1] = -1;
    let stack = [arr[n - 1]];
    for (let i = n - 2; i >= 0; i--) {
        while (stack[stack.length - 1] >= arr[i] && stack.length !== 0) {
            stack.pop();
        }
        if (stack.length === 0) nsElements[i] = -1;
        else nsElements[i] = stack[stack.length - 1];
        stack.push(arr[i]);
    }
    return nsElements;
}

// function runProgram(input) {
//     let ni = input.trim().split("\n");
//     let t = +ni[0];
//     for (let a = 1; a <= t; a++) {
//         let arr = ni[a * 2].trim().split(" ").map(Number);
//         let n = arr.length;
//         let stack2  = nextGreater(arr, n);
//         let prod = 1;
//         for (let i = 0; i < stack2.length; i++) {
//             if (stack2[i] === -1) prod *= -1;
//             else {
//                 let f = false;
//                 for (let j = stack2[i]; j < n; j++) {
//                     if (arr[j] < arr[stack2[i]]) {
//                         f = true;
//                         prod *= arr[j];
//                         break;
//                     }
//                 }
//                 if(!f) prod *= -1
//             }
//         }
//         console.log(prod);
//     }
// }
// function nextGreater(arr, n) {
//     let stack = [n - 1];
//     let stack2 = Array(n).fill(0);
//     stack2[n - 1] = -1;
//     for (let i = n - 2; i >= 0; i--) {
//         while (arr[stack[stack.length - 1]] <= arr[i] && stack.length !== 0) {
//             stack.pop();
//         }
//         if (stack.length === 0) {
//             stack2[i] = -1;
//         } else {
//             stack2[i] = stack[stack.length - 1];
//         }
//         stack.push(i);
//     }
//     return stack2;
// }
