// Given an array of n integers, the array is sorted. You have to remove the duplicates, print only unique elements, do it in place. i.e O(1) space




runProgram(`2
3
1 1 2
4
1 1 3 3`);


function runProgram(input) {
    let ni = input.split("\n");
    let t = +ni[0];
    for (let a = 1; a <= t; a++) {
        let arr = ni[a * 2].trim().split(" ").map(Number);
        let n = arr.length;
        let temp = arr[0]; let str = arr[0] + ' '; let count = 1;
        for (let i = 1; i < n; i++) {
            if (temp !== arr[i]) {
                str += arr[i] + " ";
                count++;
                temp = arr[i];
            }
        }
        console.log(count);
        console.log(str);
    }
}






















// function runProgram(input) {
//     let ni = input.split("\n");
//     let t = +ni[0];
//     for (let a = 1; a <= t; a++) {
//         let arr = ni[a * 2].trim().split(" ").map(Number);
//         let n = arr.length;
//         let temp = arr[0]; let count = 1; let str = arr[0]+" ";
//         for (let i = 1; i < n; i++) {
//             if (temp !== arr[i]) { 
//                 str += arr[i] + " ";
//                 temp = arr[i];
//                 count++;
//             }
//         }
//         console.log(count)
//         console.log(str);
//     }
// }
