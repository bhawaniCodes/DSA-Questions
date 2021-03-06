// There are many signal towers present in Bangalore.Towers are aligned in a straight horizontal line(from left to right) and each tower transmits a signal in the right to left direction.

// Tower X shall block the signal of Tower Y if Tower X is present to the left of Tower Y and Tower X is taller than Tower Y. So,the power of a signal of a given tower can be defined as :

// {(the number of contiguous towers just to the left of the given tower whose height is less than or equal to the height of the given tower) + 1}.

// You need to write a program that finds the power of each tower.

runProgram(`2
7
100 80 60 70 60 75 85
5
3 5 0 9 8`);

function runProgram(input) {
    let ni = input.split("\n");
    let t = +ni[0];
    for (let a = 1; a <= t; a++) {
        let arr = ni[a * 2].trim().split(" ").map(Number);
        let n = arr.length;
        findSignal(arr, n);
    }
}
function findSignal(arr, n) {
    let stack = [0];
    let countAr = [1];
    for (let i = 1; i < n; i++) {
        while (arr[stack[stack.length - 1]] <= arr[i] && stack.length !== 0) {
            stack.pop();
        }
        if (stack.length === 0) countAr.push(i+1);
        else countAr.push(i - stack[stack.length-1]);
        stack.push(i);
    }
    console.log(countAr);
}

// function findSignal(arr, n) {
//     let towArr = [1];
//     for (let i = 1; i < n; i++) {
//         let f = true;
//         for (j = i - 1; j >= 0; j--) {
//             if (arr[j] >= arr[i]) {
//                 towArr.push(i - j);
//                 f = false;
//                 break;
//             }
//         }
//         if (f) towArr.push(i + 1);
//     }
//     console.log(towArr.join(' '));
// }
