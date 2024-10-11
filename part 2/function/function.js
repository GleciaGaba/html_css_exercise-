"use strict";

function greet(a, b) {
  if (!a || !b) {
    console.log("Tu dois entrer les paramètres");
    return;
  }
  let result = Number(a) + Number(b);
  return result;
}

console.log(greet(5, 6));
