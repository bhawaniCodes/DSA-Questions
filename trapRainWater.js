// Givennnon-negative integers representing an elevation map where the width of each bar is 1, calculate how much rain water will be trapped after it rains.

runProgram(`2
5
3 2 0 4 6
7
7 0 3 6 2 3 5`);

function runProgram(input) {
    let ni = input.split("\n");
    let t = +ni[0];
    for (let a = 1; a <= t; a++) {
        let arr = ni[a * 2].trim().split(" ").map(Number);
        let n = arr.length;
        console.log(trapTotalWater(arr, n));
    }
}


function trapTotalWater(arr, n) {
    let lMax = 0; let rMax = 0;
    let low = 0; let hi = n - 1; let res = 0;
    while (low <= hi) {
        if (arr[low] < arr[hi]) {
            if (arr[low] > lMax) lMax = arr[low];
            else { res += lMax - arr[low]; }
            low++
        } else {
            if (arr[hi] > rMax) rMax = arr[hi];
            else { res += rMax - arr[hi]; }
            hi--;
        }
    }
    return res;
}

// function trapTotalWater(arr, n) {
//     let res = 0;
//     let r = Array(arr.length).fill(0);
//     let l = [arr[0]]; r[n-1] = arr[n-1];
//     for (let i = 1; i < n; i++) {
//         l[i] = Math.max(l[i-1], arr[i])
//     }
//     for (let i = n-2; i >= 0; i--) {
//         r[i] = Math.max(r[i + 1], arr[i]);
//     }
//     for (let i = 0; i < n; i++) {
//         res += Math.min(l[i], r[i])-arr[i];
//     }
//     return res;
// }

// function trapTotalWater(arr, n) {
//     let res = 0;
//     for (let i = 1; i < n-1; i++) {
//         let left = arr[i];
//         for (let j = i - 1; j >= 0; j--) {
//             left = Math.max(left, arr[j]);
//         }
//         let right = arr[i];
//         for (let j = i + 1; j < n; j++) {
//             right = Math.max(right, arr[j]);
//         }
//         res += Math.min(right, left) - arr[i];
//     }
//     return res;
// }


// function trapTotalWater(arr, n) {
//     let ans = 0;
//     let stack = [0];
//     for (let i = 1; i < n; i++) {
//         let cur = arr[i];
//         while (cur >= arr[stack[stack.length - 1]] && stack.length > 0) {
//             let top = stack.pop();
//             let distance =
//                 stack.length > 0 ? i - stack[stack.length - 1] - 1 : i - 1;
//             let bound_height =
//                 stack.length > 0
//                     ? Math.min(cur, arr[stack[stack.length - 1]]) - arr[top]
//                     : cur - arr[top];
//             console.log(i, stack, ans);
//             ans += distance * bound_height;
//         }

//         stack.push(i);
//     }
//     return ans;
// }

