var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
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
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    return getCity();
}
var first = [1, 2, 3, 4][0];
var _a = [1, 2, 3, 4], second = _a[1], fourth = _a[3];
var user = 'gabika';
var matrix = [[1, 2, 3, 6, 5], [6, 7, 8, 9], [10, 9, 8, 7, 6, 5]];
// document.body.innerHTML = greeter(user);
document.body.innerHTML = sumMatrix(matrix).toString();
document.body.innerHTML = "<div class='searchInput'><input placeholder='insert here...'></div>";
// const searchButton: HTMLButtonElement = new HTMLButtonElement;
// searchButton.textContent = "send";
var searchInput = document.getElementsByClassName('searchInput').item(0);
// searchInput.appendChild(searchButton);
searchInput.addEventListener('click', function () {
    searchInput.style.background = '#336633';
    // searchInput.placeholder = 'hello';
});
document.body.innerHTML = greeter(user);
document.body.innerHTML = sumMatrix(matrix).toString();
document.body.innerHTML = theCityThatAlwaysSleeps();
console.log(first);
console.info(second, fourth);
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
// let { a,b } = o;
// ({ a, b } = { a: "baz", b: 101 });
// ({a,b} = {a:"nothing",b:"new type"}); retyping not working here :)
console.error(o);
console.error('variable from object: ', o.a, o.b);
var a = o.a, passthrough = __rest(o, ["a"]);
var total = a.length + passthrough.b + passthrough.c.length;
console.log("total: ", total);
