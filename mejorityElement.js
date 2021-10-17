
runProgram(`2
6
1 1 1 1 2 3
5
1 1 2 2 3`);



function runProgram(input) {
    let ni = input.split("\n");
    let t = +ni[0];
    for (let a = 1; a <= t; a++) {
        let arr = ni[a * 2].trim().split(" ").map(Number);
        let n = arr.length;
        let half = Math.floor(n/2)
        let obj = {};
        for(let i = 0; i<n; i++){
            if(obj[arr[i]] === undefined){
                obj[arr[i]] = 1;
            } else {
                obj[arr[i]]++;
            }
        }
        const {maxKey, max} = findMaxRepeatitive(obj)
        if(max > half){console.log(maxKey)}
        else console.log(-1)
    }
}
function findMaxRepeatitive(obj){
    let max; let maxKey;
    for(key in obj){
            if(max === undefined) {max = obj[key]; maxKey = key;}
            if(obj[key] > max){
                max = obj[key];
                maxKey = key
            }
        }
        return {maxKey, max};
}
    
    


// function runProgram(input) {
//     let ni = input.split("\n");
//     let t = +ni[0];
//     for (let a = 1; a <= t; a++) {
//         let arr = ni[a * 2]
//             .trim()
//             .split(" ")
//             .map(Number)
//             .sort((a, b) => a - b);
//         let n = arr.length;
//         let half = Math.floor(n / 2);
//         let temp = arr[0];
//         let count = 1;
//         let maxCnt = 0;
//         let ele = arr[0];
//         for (let i = 1; i < n; i++) {
//             if (arr[i] === temp) {
//                 count++;
//             } else {
//                 if (maxCnt < count) {
//                     maxCnt = count;
//                     ele = temp;
//                 }
//                 temp = arr[i];
//                 count = 1;
//             }
//         }
//         if (maxCnt < count) {
//             maxCnt = count;
//             ele = temp;
//         }
//         if (maxCnt > half) console.log(ele);
//         else console.log(-1);
//     }
// }