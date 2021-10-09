// Given an array of integers and a target value, find the sum of three integers that is closest to the target value.

// If there are more than one values, answer the largest value.



runProgram(`2
4 1
-1 2 1 -4
3 1
0 0 0`);

function runProgram(input) {
    let ni = input.split("\n");
    let t = +ni[0];
    for (let a = 1; a <= t; a++) {
        let arr = ni[a*2].trim().split(" ").map(Number);
        let [n, tar] = ni[a * 2 - 1].trim().split(" ").map(Number);
        let dif = 0; let minDif; let finalSum;
        for (let i = 0; i < n-2; i++) {
            for (let j = i+1; j < n - 1; j++) {
                for (let k = j+1; k < n; k++) {
                    let sum = arr[i] + arr[j] + arr[k];
                    
                    let dif = Math.abs(tar - sum);
                    
                    if (minDif === undefined) {
                        minDif = dif;
                        finalSum = sum;
                    }
                    else if (minDif > dif) {
                        minDif = dif;
                        finalSum = sum;
                    }
                }
            }
        }
        if (n < 3) console.log(0)
        else
        console.log(finalSum)
    }
}



// function runProgram(input) {
//     let ni = input.split("\n");
//     let t = +ni[0];
//     for (let a = 1; a <= t; a++) {
//         let arr = ni[a * 2].trim().split(" ").map(Number);
//         let [n, tar] = ni[a * 2 - 1].trim().split(" ").map(Number);
//         let dif = 0;
//         let minDif;
//         let finalSum;
//         for (let i = 0; i < n - 2; i++) {
//             for (let j = i + 1; j < n - 1; j++) {
//                 for (let k = j + 1; k < n; k++) {
//                     let sum = arr[i] + arr[j] + arr[k];

//                     let dif = Math.abs(tar - sum);

//                     if (minDif === undefined) {
//                         minDif = dif;
//                         finalSum = sum;
//                     } else if (minDif > dif) {
//                         minDif = dif;
//                         finalSum = sum;
//                     }
//                 }
//             }
//         }
//         if (n < 3) console.log(0);
//         else console.log(finalSum);
//     }
// }