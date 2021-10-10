// You are given an array of n elements and an integer k, you need to rotate the array by k units towards right direction ( => ).




runProgram(`3
3 1
1 2 3
2 2
1 2
2 3
1 2`);

function runProgram(input) {
    let ni = input.split("\n");
    let t = +ni[0];
    for (let a = 1; a <= t; a++) {
        let arr = ni[a * 2].trim().split(" ").map(Number);
        let [n, k] = ni[a * 2 - 1].trim().split(" ").map(Number);
        console.log(rotateArray(arr, n, k).join(' '));
    }
}
function rotateArray(arr, n, k) {
    k = k % n;
    let pos = (n - k)%n; let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[pos]);
        pos = (pos + 1) % n;
    }
    return newArr
}