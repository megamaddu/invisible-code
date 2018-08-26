// mutability hides change

let sum = 0;

function sumTen() {
  for (let i = 0; i < 10; i++) {
    sum += i;
  }
  return sum;
}

function minusTwo() {
  sum -= 2;
  return sum;
}
