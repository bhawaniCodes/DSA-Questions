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
    k = n - k;
    arr = reverse(arr, 0, k - 1);
    arr = reverse(arr, k, n - 1)
    arr = reverse(arr, 0, n - 1);
    return arr;
}
function reverse(arr, a, b) {
    let l = a; let h = b;
    while (l < h) {
        let temp = arr[l];
        arr[l] = arr[h];
        arr[h] = temp;
        l++; h--;
    }
    return arr;
}












// function runProgram(input) {
//     let ni = input.split("\n");
//     let t = +ni[0];
//     for (let a = 1; a <= t; a++) {
//         let arr = ni[a * 2].trim().split(" ").map(Number);
//         let [n, k] = ni[a * 2 - 1].trim().split(" ").map(Number);
//         console.log(rotateArray(arr, n, k).join(' '));
//     }
// }
// function rotateArray(arr, n, k) {
//     k = k % n; let rotatedArr = [];
//     let start = (n - k) % n;
//     for (let i = 0; i < n; i++) {
//         rotatedArr.push(arr[start])
//         start = (start + 1) % n;
//     }
//     return rotatedArr;
// }

