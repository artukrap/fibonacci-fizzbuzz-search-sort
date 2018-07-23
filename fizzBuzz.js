/*
* Write a JavaScript function below that will console.log the numbers from 1 to 100.
* For numbers which are multiples of three print "Fizz" instead of the number.
* For numbers which are multiples of five print "Buzz" instead of the number.
* For numbers which are multiples of both three and five print "FizzBuzz" instead of the number.
* For numbers that do not meet any of these conditions print the number.
*/

function FizzBuzz(number) {
  for (let i=1; i <= number; i++)
  {
      if (i % 5 == 0 && i % 3 == 0)
          console.log("FizzBuzz");
      else if (i % 3 == 0)
          console.log("Fizz");
      else if (i % 5 == 0)
          console.log("Buzz");
      else
          console.log(i);
  }
}

FizzBuzz(100);
