/*
* Write a JavaScript function below to get the first n Fibonacci numbers.
* Note: The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . .
* Each subsequent number is the sum of the previous two.
*/

function Fibonacci(number) {
  let sequence = [0, 1, 1];

  for (let i = 2; i < number; i++) {
    sequence[i] = sequence[i-1]+ sequence[i-2];
  }

  return sequence.join(',');
}

console.log(Fibonacci(10));
