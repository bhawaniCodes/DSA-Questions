// We have an array A of n winners where winners are randomly lined up starting from position 0 to position n-1. The gold players have their value assigned as 0, silver as 1, and bronze as 2.
// Since the government computers are not well equipped with the latest technologies, there are some space and time constraints under which you need to execute this task. (Also the sort function doesn't work since it takes O(nlogn)),




runProgram(`3
1
2
3
2 0 1
4
2 0 2 1`);

function runProgram(input) {
    let ni = input.split("\n");
    let t = +ni[0];
    for (let a = 1; a <= t; a++) {
        let arr = ni[a*2].trim().split(" ").map(Number);
        let n = arr.length;
        let g = []; let s = []; let b = [];
        for (let i = 0; i < n; i++) {
            if (arr[i] === 0) {g.push(arr[i]) }
            if (arr[i] === 1) {s.push (arr[i])}
            if (arr[i] === 2) {b.push(arr[i]) }
        }
        console.log([...g, ...s, ...b].join(' '));
    }
}
