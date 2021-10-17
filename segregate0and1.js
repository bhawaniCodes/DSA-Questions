// Given a array of N 32 bit integers. You need to find product of array for each i without considering ith element. where 0 <= i <= n-1 . See sample test case for better understanding.

// You are not allowed to use division operator. It is given that product will fit in 32 bit integer.

runProgram(`2
9
1 1 0 1 0 1 1 0 0
3
0 1 0`);

function runProgram(input) {
    let ni = input.split("\n");
    let t = +ni[0];
    for (let a = 1; a <= t; a++) {
        let arr = ni[a * 2].trim().split(" ").map(Number);
        console.log(segregate(arr));
    }
}
function segregate(arr) {
    let n = arr.length; let l = 0; let r = n - 1;
    while (l < r) {
        while (arr[l] === 0 && l < r) l++;
        while (arr[r] === 1 && l < r) r--;
        if (l < r) {
            arr = swap(arr, l, r);
            l++; r--;
        }
    }
    return arr
}
function swap(arr, l, r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    return arr;
}
