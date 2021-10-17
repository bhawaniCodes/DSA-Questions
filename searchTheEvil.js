// Christmas is around the corner, and the famous American paranormal investors, Ed and Lorraine Warren, are trying to clean their house. Because of their job, they have collected a lot of objects, which have the influence of a cruel soul in someway or another. Since, they are going to have a Christmas party at their house, they have decided to get rid of all the evil objects. They have given an integer ID to all the objects, and had kept them, in a matrix grid of size N X M.

// The grid has been protected by a special charm, such that the entire grid is sorted row wise, and column wise.

// They found all the objects, except for one object with ID "K". Since, they have to make arrangements for the party, they ask you to check, if the object with ID "K", can be found or not.

// Print "true", if the object can be found, else print "false".

// Note : Multiple objects may have the same ID.

// Expected Time Complexity - O(N + M)


runProgram(`2
4 4
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16 
13
2 4
1 4 12 16
5 7 13 17
13`);


function runProgram(input) {
    let ni = input.split("\n");
    let t = +ni[0];
    let k = 2;
    for (let a = 1; a <= t; a++) {
        let [n, m] = ni[k-1].trim().split(' ').map(Number);
        let mat = ni.slice(k, k + n).map((row) => row.trim().split(' ').map(Number))
        let key = +ni[k + n];
        console.log(findKey(mat, n, m, key));
        k = k + n + 2;
    }
}
function findKey(mat, n, m, key) {
    let i = 0;
    let j = m - 1;
    while (i < n && j >= 0) {
        if (mat[i][j] === key) return true;
        else if (mat[i][j] < key) i++;
        else j--;
    }
    return false;
}














// function runProgram(input) {
//     let ni = input.split("\n");
//     let t = +ni[0];
//     let k = 2;
//     for (let a = 1; a <= t; a++) {
//         let [n, m] = ni[k - 1].trim().split(' ').map(Number);
//         let mat = ni.slice(k, k + n).map((row) => row.split(" ").map(Number));
//         let key = +ni[k + n];
//         console.log(findKey(mat, n, m, key));
//         k = k + n + 2;
//     }
// }


// function findKey(mat, n, m, key) {
//     let i = 0; j = m - 1;
//     while (i < n && j >= 0) {
//         if (mat[i][j] === key) return true;
//         else if (mat[i][j] < key) { i++; }
//         else j--;
//     }
//     return false;
// }
