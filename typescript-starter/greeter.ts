function greeter(person: String) {
  let upperCaseFirst = person.charAt(0).toUpperCase();
  person = upperCaseFirst + person.substring(1);
  return 'Hello little ' + person + ". What's up ?";
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

function theCityThatAlwaysSleeps() {
    let getCity;

    if (true) {
        let city = "Seattle";
        getCity = function() {
            return city;
        }
    }

    return getCity();
}

let [first] = [1, 2, 3, 4];
let [, second, , fourth] = [1, 2, 3, 4];
let user = 'gabika';
let matrix: number[][] = [[1, 2, 3, 6, 5], [6, 7, 8, 9], [10, 9, 8, 7, 6, 5]];

// document.body.innerHTML = greeter(user);
document.body.innerHTML = sumMatrix(matrix).toString();
document.body.innerHTML = "<div class='searchInput'><input placeholder='insert here...'></div>";
// const searchButton: HTMLButtonElement = new HTMLButtonElement;
// searchButton.textContent = "send";
const searchInput: HTMLInputElement = <HTMLInputElement> document.getElementsByClassName('searchInput').item(0);
// searchInput.appendChild(searchButton);
searchInput.addEventListener('click', () => {
  searchInput.style.background = '#336633';
  // searchInput.placeholder = 'hello';
});

document.body.innerHTML = greeter(user);
document.body.innerHTML = sumMatrix(matrix).toString();
document.body.innerHTML = theCityThatAlwaysSleeps();
console.log(first);
console.info(second,fourth);

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};

// let { a,b } = o;

// ({ a, b } = { a: "baz", b: 101 });
// ({a,b} = {a:"nothing",b:"new type"}); retyping not working here :)

console.error(o);
console.error('variable from object: ',o.a,o.b);

let { a, ...passthrough } = o;
let total = a.length + passthrough.b + passthrough.c.length;
console.log("total: ",total);

