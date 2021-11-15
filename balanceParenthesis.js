runProgram(`3
{([])}
()
([]
`);

function runProgram(input) {
    let ni = input.split("\n");
    let t = +ni[0];
    for (let a = 1; a <= t; a++) {
        let arr = ni[a].trim().split("");
        let n = arr.length;
        console.log(checkBalance(arr, n));
    }
}

function checkBalance(arr, n) {
    let stack = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
            stack.push(arr[i]);
        } else {
            if (isEmpty(stack)) return "not balanced";
            let stackTop = stack.pop();
            if (!isMatching(stackTop, arr[i])) return "not balanced";
        }
    }
    if (isEmpty(stack)) return "balanced";
    else return "not balanced";
}

function isMatching(stackTop, cur) {
    if (stackTop === "(" && cur === ")") return true;
    if (stackTop === "{" && cur === "}") return true;
    if (stackTop === "[" && cur === "]") return true;
    return false;
}

function isEmpty(stack) {
    if (stack.length === 0) return true;
    else return false;
}
