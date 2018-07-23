/*
* Write a JavaScript function below that accepts a string as a parameter
* and find the longest word within the string.
* Example string: "What is the longest word in this string"
*/

function findLongestWord(string) {
  return string.split(' ').sort(function (a, b) {
    return b.length - a.length;
  })[0];
}

console.log(findLongestWord("What is the longest word in this string"));
