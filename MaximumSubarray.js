// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.



runProgram(`3
3
1 2 3
4
-1 -1 0 1
3
2 -1 2`);

function runProgram(input) {
    let ni = input.split("\n");
    let t = +ni[0];
    for (let a = 1; a <= t; a++) {
        let arr = ni[a * 2].trim().split(" ").map(Number);
        let n = arr.length;
        console.log(maxSum(arr, n))
    }
}
function maxSum(arr, n) {
    let maxSum = arr[0];
    let sum = arr[0];
    for (let i = 1; i < n; i++) {
        if (arr[i] > sum + arr[i]) {
            sum = arr[i];
        } else sum += arr[i];
        if (maxSum < sum) maxSum = sum;
    }
    return maxSum;
}













// function runProgram(input) {
//     let arr = input; let maxSum = Number.NEGATIVE_INFINITY  ; let curSum = 0;
//     let n = arr.length;
//     for(let i = 0; i<n; i++){
//         console.log(i, curSum, maxSum)
//         curSum = Math.max(arr[i], curSum + arr[i])
//         if(maxSum < curSum){ maxSum = curSum};
//         // if(curSum < 0 ) curSum = 0
//     }
//     console.log(maxSum)
// }














// function runProgram(input) {
//     let arr = input; let maxSum1;
//     for (let i = 0; i < arr.length; i++) {
//         let nArr = []; let sum1 = 0;
//         for (let j = i; j < arr.length; j++) {
//             sum1 += arr[i];
//             nArr.push(arr[j])
//             //  console.log(nArr)
//             if(maxSum1 === undefined) maxSum1 = sum1
//             if (maxSum1 < sum1) maxSum1 = sum1;
//         }
       
//     }
//     console.log(maxSum1)
    
// }









// let nums = [-2,1,-3,4,-1,2,1,-5,4];
// runProgram(nums);
// function runProgram(input) {
//     let arr = input; let maxSum;
//     for (let i = 0; i < arr.length; i++) {
//         let nArr = [];
//         for (let j = i; j < arr.length; j++) {
//             // let sub = arr.slice(i, j+1)
//             // let sum = 0;
//              for (let k = 0; k < sub.length; k++) {
//                  sum += sub[k]
//              }
//             if(maxSum === undefined) maxSum = sum1
//             if (maxSum < sum1) maxSum = sum1;
//         }
       
//     }
//     console.log(maxSum)
    
// }
