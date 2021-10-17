

runProgram(`abcbaaddeabbb$$$$$$$$$$$`);

function runProgram(input) {
    let str = input;
    let countArr = Array(256).fill(0);
    for (let i = 0; i < str.length; i++) {
        console.log(str.charCodeAt(i));
        countArr[str.charCodeAt(i)]++;
    }
    let max = 0; let char;
    for (let i = 0; i < countArr.length; i++) {
        if (countArr[i] > max) {
            max = countArr[i];
            if(char === undefined) char = String.fromCharCode(i);
            char = String.fromCharCode(i);
        }
    }
    console.log(char)
}

