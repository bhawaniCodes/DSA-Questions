runProgram(`abbcddeeeeeeef`);

function runProgram(input) {
    let str = input;
    let countArr = Array(256).fill(0);
    for (let i = 0; i < str.length; i++) {
        countArr[str.charCodeAt(i)]++;
    }
    let str1 = '';
    for (let i = 0; i < countArr.length; i++) {
        if (countArr[i] !== 0) {
            str1 += String.fromCharCode(i);
        }
    }
    console.log(str1)
}
