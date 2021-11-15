// Given an array of N elements, find the next greater element for each element in the array, print -1 if it does not exits. Refer to the sample I/O for better understanding

runProgram(`1
4
1 3 2 4`);


function runProgram(input) {
    let ni = input.split("\n");
    let t = +ni[0];
    for (let a = 1; a <= t; a++) {
        let arr = ni[a * 2].trim().split(" ").map(Number);
        let n = arr.length;
        console.log(nextGreater(arr, n).join([' ']));
    }
}
function nextGreater(arr, n) {
    let stack = [n - 1];
    let res = Array(n).fill(0);
    res[n - 1] = -1;

    for (let i = n - 2; i >= 0; i--) {
        while (arr[stack[stack.length - 1]] <= arr[i] && stack.length !== 0) {
            stack.pop();
        }
        if (stack.length === 0) res[i] = -1;
        else res[i] = arr[stack[stack.length-1]]
        stack.push(i);
    }
    return res;
}
