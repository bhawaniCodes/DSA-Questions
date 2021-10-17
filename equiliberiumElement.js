// Given an array A of N positive numbers. The task is to find the position where equilibrium first occurs in the array. Equilibrium position in an array is a position such that the sum of elements before it is equal to the sum of elements after it.

runProgram(`5
3 3 5 5 1`);

function runProgram(input) {
    let ni = input.trim().split("\n");
    let arr = ni[1].trim().split(" ").map(Number);
    let n = arr.length;
    console.log(findEquiPos(arr, n));
}
function findEquiPos(arr, n) {
    let rightSum = 0;
    for (let i = 0; i < n; i++) {
        rightSum += arr[i];
    }
    let leftSum = 0;
    for (let i = 0; i < n; i++) {
        rightSum = rightSum - arr[i];
        if (i !== 0 && i !== n - 1) {
            if (rightSum === leftSum) return i + 1;
        }
        leftSum = leftSum + arr[i];
    }
    return -1;
}



