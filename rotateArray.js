
runProgram(`3
3 1
1 2 3
2 2
1 2
2 3
1 2`);

function runProgram(input) {
    let ni = input.split("\n");
    let t = +ni[0];
    for (let a = 1; a <= t; a++) {
        let arr = ni[a * 2].trim().split(" ").map(Number);
        const [n, k] = ni[a * 2-1].trim().split(" ").map(Number);
        rotateArr(arr, n, k)
        
    }
}
function rotateArr(arr, n, k){
    k = k%n;
    let strt = n - k
    for(let = 0; i<n; i++){
        arr[strt] 
    }
}
    
    
