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
        let arr = ni[a * 2].trim().split(" ").map(Number);
        console.log(findProduct(arr).join(' '));
    }
}
function findProduct(arr) {
    let n = arr.length; let prod = 1;
    for (let i = 0; i < n; i++) {
        prod *= arr[i];
    }
    const finalArr = [];
    for (let i = 0; i < n; i++) {
       finalArr.push(prod/arr[i]) 
    }
    return finalArr;
}
