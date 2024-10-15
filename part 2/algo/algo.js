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
      console.log("This is not an even number.");
    }
  }
}

console.log(sumEventNumber(num));
console.log(pair);
