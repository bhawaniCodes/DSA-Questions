// There are two types of sweets available, and Pradhan Ji decides that all the families who have even number of members will get sweets ofType 1, and all the families who have odd number of members, will get sweets ofType 2. So, he assigns Sachiv Ji, the task of assigning the sweets.

runProgram(`2
6
1 3 5 2 7 4
1
6 
1 3 5 2 7 4
2`);

function runProgram(input) {
    let ni = input.split("\n");
    let t = +ni[0];
    let k = 2;
    for (let a = 1; a <= t; a++) {
        let arr = ni[k].trim().split(" ").map(Number);
        let x = +ni[k + 1];
        if (x === 1) console.log(segregateEvenOdd(arr));
        else if (x === 2) console.log(segregateOddEven(arr));

        k = k + 3;
    }
}
function segregateEvenOdd(arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        while (arr[l] % 2 === 0 && l < r) l++;
        while (arr[r] % 2 !== 0 && l < r) r--;
        arr = swap(arr, l, r);
    }
    return arr;
}

function segregateOddEven(arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        while (arr[l] % 2 !== 0 && l < r) l++;
        while (arr[r] % 2 === 0 && l < r) r--;
        arr = swap(arr, l, r);
    }
    return arr;
}
function swap(arr, l, r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    return arr;
}

// function runProgram(input) {
//     let ni = input.split("\n");
//     let t = +ni[0]; let k = 2;
//     for (let a = 1; a <= t; a++) {
//         let arr = ni[k].trim().split(" ").map(Number);
//         let type = +ni[k + 1];
//         let n = arr.length;
//         let even = []; let odd = [];
//         for (let i = 0; i < n; i++) {
//             if (arr[i] % 2 === 0) even.push(arr[i])
//             else odd.push(arr[i])
//         }
//         even.sort((a,b)=>a-b)
//         odd.sort((a,b)=>a-b)
//         if (type === 1) { console.log([...even, ...odd].join(' ')) }
//         else console.log([...odd, ...even].join(' '))
//         k = k + 3;
//     }
// }
