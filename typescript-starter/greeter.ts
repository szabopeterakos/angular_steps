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
