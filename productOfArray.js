// Given a array of N 32 bit integers. You need to find product of array for each i without considering ith element. where 0 <= i <= n-1 . See sample test case for better understanding.

// You are not allowed to use division operator. It is given that product will fit in 32 bit integer.


runProgram(`2
5
1 2 3 4 5
3
3 2 7`);


function runProgram(input) {
    let ni = input.split("\n");
    let t = +ni[0];
    for (let a = 1; a <= t; a++) {
        let arr = ni[a * 2].trim().split(' ').map(Number);
        let n = arr.length;
        let temp = 1; let p = [];
        for (let i = 0; i < n; i++) {
            p[i] = temp;
            temp = temp * arr[i];
        }
        temp = 1;
        for (let i = n - 1; i >= 0; i--) {
            p[i] = temp * p[i];
            temp = temp * arr[i];
        }
        console.log(p.join(' '));
    }
}








// function runProgram(input) {
//     let ni = input.split("\n");
//     let t = +ni[0];
//     for (let a = 1; a <= t; a++) {
//         let arr = ni[a * 2].trim().split(' ').map(Number);
//         let n = arr.length; let totMal = 1;
//         for (let i = 0; i < n; i++) {
//             totMal *= arr[i];
//         } let str = "";
//         for (let i = 0; i < n; i++) {
//             str += totMal / arr[i] + " ";
//         }
//         console.log(str);
//     }
// }
