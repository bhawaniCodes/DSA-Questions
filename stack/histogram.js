// Givennnon-negative integers representing the histogram's bar height where the width of each bar is 1, what is the area of the largest rectangle that can be formed using this histogram?

runProgram(`2
4
2 3 4 5
6
7 5 4 3 6 8`);

function runProgram(input) {
    let ni = input.split("\n");
    let t = +ni[0];
    for (let a = 1; a <= t; a++) {
        let arr = ni[a * 2].trim().split(" ").map(Number);
        let n = arr.length;
        console.log(areaOfHistogram(arr, n));
    }
}

function areaOfHistogram(arr, n) {
    let max = 0;
   let lArr = leftSmallerArray(arr, n);
   let rArr = rightSmallerArray(arr, n);
   for (let i = 0; i < n; i++) {
       let cur = (rArr[i] - lArr[i] - 1) * arr[i]
       max = Math.max(cur, max);
    }
    return max;
}
function leftSmallerArray(arr, n) {
    let stack = [0];
    let lArr = [-1];
    for (let i = 1; i < n; i++) {
        while (arr[stack[stack.length - 1]] >= arr[i] && stack.length !== 0) {
            stack.pop();
        }
        if (stack.length === 0) lArr.push(-1);
        else lArr.push(stack[stack.length - 1])
        stack.push(i)
    }
    return lArr;
}

function rightSmallerArray(arr, n) {
    let stack = [n-1];
    let rArr = Array(n).fill(0);
    rArr[n - 1] = n;
    for (let i = n-2; i >=0; i--) {
        while (arr[stack[stack.length - 1]] >= arr[i] && stack.length !== 0) {
            stack.pop();
        }
        if (stack.length === 0) rArr[i] = n;
        else rArr[i] = stack[stack.length - 1];
        stack.push(i);
    }
    return rArr;
}













// function areaOfHistogram(arr, n) {
//     let maxFinal = 0;
//     for (let i = 0; i < n; i++) {
//         let cnt = 0; 
//         for (let j = i - 1; j >= 0; j--) {
//             if (arr[j] >= arr[i]) { cnt++; }
//             else break; 
//         }
//         for (let j = i; j < n; j++) {
//             if (arr[j] >= arr[i]) { cnt++; }
//             else break;
//         }
//         let final = cnt * arr[i];
//         if (final > maxFinal) maxFinal = final;
//     }
//     return maxFinal;
// }
