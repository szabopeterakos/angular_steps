function greeter(person) {
    var upperCaseFirst = person.charAt(0).toUpperCase();
    person = upperCaseFirst + person.substring(1);
    return 'Hello little ' + person + ". What's up ?";
}
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            sum += currentRow[i_1];
        }
    }
    return sum;
}
var user = 'gabika';
var matrix = [[1, 2, 3, 6, 5], [6, 7, 8, 9], [10, 9, 8, 7, 6, 5]];
// document.body.innerHTML = greeter(user);
document.body.innerHTML = sumMatrix(matrix).toString();
