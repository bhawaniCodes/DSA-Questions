function runProgram(input) {
    let ni = input.trim().split("\n");
    let arr = ni[1].trim().split(" ").map(Number);
    let n = arr.length;
    let totSum = 0;
    for (let i = 0; i < n; i++) {
        totSum += arr[i];
    }
    let idx = -1;
    let leftSum = 0;
    for (let j = 0; j < n; j++) {
        totSum -= arr[j];
        if (j !== 0 && j !== n - 1) {
            if (leftSum === totSum) {
                idx = j + 1;
                break;
            }
        }
        leftSum += arr[j];
    }
    console.log(idx);
}
