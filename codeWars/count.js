function rowSumOddNumbers(n) {
  var num_first = 1;
  var sum = 0;
  for (let i = 0; i < n ; i++) {
    num_first += 2*i;
  }
  // sum += num_first;
  for (let j = 0; j < n ; j++) {
    sum += num_first;
    num_first += 2;
  }
  return sum;
}

console.log(rowSumOddNumbers(42));