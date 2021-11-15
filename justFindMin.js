// You are given N which is the number of different types of operation you need to perform on a stack. There are 3 different types of operations:

// PUSH V: Here V is an integer which you need to push in the stack

// POP: Here POP out the top element from stack. (In case stack is empty print "EMPTY")

// MIN: Print the minimum value present in the stack




runProgram(`11
PUSH 5
PUSH 7
PUSH 3
PUSH 8
PUSH 10
MIN
POP
POP
MIN
POP
MIN`);

function runProgram(input) {
    let ni = input.split("\n");
    let t = +ni[0]; let stack = [];
    for (let a = 1; a <= t; a++) {
        let [type, num] = ni[a].split(' ');
        if (type === 'PUSH') {
            stack.push(+num);
        } else if (type === 'POP') {
            if (stack.length > 0) {
                stack.pop();
            } else console.log("EMPTY");
        } else if (type === "MIN") {
            if (stack.length > 0) {
                let min = stack[0];
                for (let i = 1; i < stack.length; i++) {
                    min = Math.min(stack[i], min);
                }
                console.log(min);
            } else console.log("EMPTY");
        }
    }
}

