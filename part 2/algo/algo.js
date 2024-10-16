let str = "abracadabra";
//console.log(str[1]);
for (let letter of str) {
  //console.log(letter);
}

for (let i = 0; i < str.length; i++) {
  //console.log(str[i].toUpperCase());
}

//AbraCadAbra

const strSplited = str.split(" ");
let finalWord = " ";

for (let i = 0; i < strSplited.length; i++) {
  finalWord += strSplited[i][0].toUpperCase + strSplited[i].slice(1);
}

//console.log(finalWord);

function sliceLetter(word) {
  let first = word.slice(1, length - 1);

  return first;
}

//console.log(sliceLetter("glecia"));
let num = [1, 2, 3, 5, 6];
let pair = [];

function sumEventNumber(arr) {
  for (i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      pair.push(arr[i]);
    } else {
      //console.log("This is not an even number.");
    }
  }
}

//console.log(sumEventNumber(num));
//console.log(pair);

//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
//which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  let result = " ";
  let numStr = num.toString();
  let numSplit = numStr.split("");
  console.log(numSplit);
  for (let n of numSplit) {
    let nNumber = Number(n);
    result += nNumber;
    for (let i = 0; i < n; i++) {
      result *= n;
      console.log(result);
    }
  }
}

persistence(666);

//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
//
//Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
//
//Note: The function accepts an integer and returns an integer.
//
//Happy Coding!
