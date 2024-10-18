"use strict";

// const restaurant = {
//   restaurantName: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   numGuests: 0,
// };

// console.log(Object.entries(restaurant));
// console.log(Object.values(restaurant));
// console.log(Object.keys(restaurant));

// for (let [key, value] of Object.entries(restaurant)) {
//   console.log(key);
//   console.log(value);
// }

// const guests = restaurant.numGuests ?? 10;
// console.log(guests);

// // const restaurant2 = { ...restaurant };
// // restaurant2.restaurantName = "Paris";
// // // console.log(restaurant2);
// // // console.log(restaurant);

// // const { restaurantName, location: place } = restaurant;

// // const { sat, ...weekdays } = restaurant.openingHours;
// // // console.log(restaurant.openingHours);

// // console.log(weekdays);

// // const arr = [1, 3, 7, 78, 23];
// // // REST pattern
// // const [d, f, ...others] = arr;
// // console.log(others);

// // // const a = arr[0];
// // // const b = arr[1];
// // // const c = arr[2];
// // //const [a, b, c] = arr;
// // const newArr = [11, 23, ...arr];
// // const bigMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // //console.log(bigMenu);

// // const newMenu = [...restaurant.mainMenu, "Gnocchis"];
// // //console.log(newMenu);
// // // const text = "abracadabra";
// // // console.log([...text]);
// // // console.log(text.split(""));
// // let [main, secondary] = restaurant.categories;

// // // let main = restaurant.categories[0]
// // // let secondary = restaurant.categories[1];
// // //console.log(main, secondary);

// // // let temp = main;
// // // main = secondary;
// // // secondary = temp;

// // [main, secondary] = [secondary, main];

// // //console.log(main, secondary);

// // function sum(...nums) {
// //   console.log(nums);
// // }
// // sum(1, 2, 3, 4, 564, 4637, 632892);

// // short circuiting
// //console.log("R" && 11 && "e");

// const ordersSet = new Set(["pizza", "gnocchis", "pasta", "pizza", "pasta"]);
// //console.log(ordersSet.has("pizza"));

// const resto = new Map();
// resto.set(true, "Open").set(false, "Closed");
// //console.log(resto);

// const str = "TAP AIR Portugal";
// console.log(str.padEnd(20, "+"));
// console.log(str.repeat(10));

/////// ARRAYS METHODS

const arr = [1, 2, 3, 4, 5, 6];
const arr3 = [33, 44, 55];
// console.log(arr.concat(arr3));
// console.log([...arr, ...arr3]);

arr.splice(-2);
// console.log(arr);

const arr2 = arr.slice(1, 3);
// console.log(arr2);
// console.log(arr.join("+"));

// console.log(arr[arr.length - 1]);
// console.log(arr.at(-1));

const movements = [4001, [333, [32, [-4536]]], [430, [900]], [430, 1129]];
console.log(movements.flat(Infinity));

//console.log(movements.some((el) => el > 400));
//console.log(movements.every((el) => el > 400));

const positiveNumber = movements.findIndex((el) => el === 76032);
// console.log(positiveNumber);

let euroToUs = 1.2;

const totalUS = movements
  .filter((el) => el > 0)
  .map((el) => el * euroToUs)
  .reduce((a, b) => a + b);

//console.log(totalUS);

const movementsTimes2 = movements.map((movement) => {
  return movement * 2;
});
// console.log(movementsTimes2);

const filteredMovs = movements.filter((mov) => {
  return mov > 0;
});
//console.log(filteredMovs);

const sumArr = movements.reduce((a, b) => {
  return a - b;
}, 0);
//console.log(sumArr);

// for (let [i, el] of Object.entries(movements)) {
//   console.log(i, el);
// }

// movements.forEach((move, i, arr) => {
//   console.log(move);
//   console.log(i);
//   console.log(arr);
// });

const arr5 = [1, 7, 5, 11];
const sorted = arr5.sort((a, b) => b - a);

// console.log(+(24.63738382).toFixed(0));

/////// DATES ///////

const now = new Date();
//console.log(now.getTime());

const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  weekday: "long",
};

const locale = navigator.language;
// console.log(locale);

// console.log(new Intl.DateTimeFormat(locale, options).format(now));

const nums = 3333462.64738;

const options2 = {
  style: "currency",
  currency: "EUR",
};
console.log(new Intl.NumberFormat("us", options2).format(nums));
console.log(new Intl.NumberFormat("ar-SY", options2).format(nums));

setTimeout(() => {
  console.log("COUCOU");
}, 2000);

const interval = setInterval(() => {
  console.log("hi");
}, 1000);

clearInterval(interval);
