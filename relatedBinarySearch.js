// Given a array of N 32 bit integers. You need to find product of array for each i without considering ith element. where 0 <= i <= n-1 . See sample test case for better understanding.

// You are not allowed to use division operator. It is given that product will fit in 32 bit integer.

runProgram(`6
1 1 1 3 3 3	
2`);

function runProgram(input) {
    let ni = input.split('\n');
    let arr = ni[1].trim().split(' ').map(Number);
    let n = arr.length;
    let k = +ni[2];

    const firstOcr = findFirstOccur(arr, n, k)
    const lastOcr = findLastOccur(arr, n, k)
    if(firstOcr === -1 && lastOcr === -1) console.log(-1, -1, 0)
    else console.log(firstOcr, lastOcr, (lastOcr-firstOcr)+1)
}
function findFirstOccur(arr, n, k) {
    let l = 0; let h = n - 1;
    let result = -1
    while (l < h) {
        let mid = Math.floor(l + (h - l) / 2);
        if (arr[mid] === k) { result = mid; h = mid - 1; }
        else if (arr[mid] < k) l = mid + 1;
        else h = mid - 1;
    }
    return result
}
function findLastOccur(arr, n, k) {
    let l = 0;
    let h = n - 1;
    let result = -1;
    while (l < h) {
        let mid = Math.floor(l + (h - l) / 2);
        if (arr[mid] === k) {
            result = mid;
            l = mid + 1;
        } else if (arr[mid] < k) l = mid + 1;
        else h = mid - 1;
    }
    return result;
}