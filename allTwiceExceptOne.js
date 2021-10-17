// Given an array A of n elements, every element appears twice in the array except for one element. Find the element that is uniquely present in the array.

// In other words, there is one value that has a frequency of 1 whereas the rest has a frequency of 2. Find that particular element.

// Added Constraint -> Do in O(1) auxiliary space and linear time complexity.




runProgram(`2
1
5
5
1 2 1 3 2 4`);

function runProgram(input) {
    let ni = input.trim().split("\n");
    let t = +ni[0];
    for (let a = 1; a <= t; a++) {
        let arr = ni[a*2].trim().split(" ").map(Number);
        let n = arr.length;
        console.log(singleFreq(arr, n));
    }
}
function singleFreq(arr, n) {
    let temp = arr[0];
    for (let i = 1; i < n; i++) {
        temp = temp ^ arr[i];
    }
    return temp;
}
