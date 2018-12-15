function greeter(person: String) {
    let upperCaseFirst = person.charAt(0).toUpperCase();
    person = upperCaseFirst + person.substring(1);
    return 'Hello little '+person+". What's up ?";
}

function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}

let user = 'gabika';
let matrix: number[][] = [[1,2,3,6,5],[6,7,8,9],[10,9,8,7,6,5]];

// document.body.innerHTML = greeter(user);
document.body.innerHTML = sumMatrix(matrix).toString();