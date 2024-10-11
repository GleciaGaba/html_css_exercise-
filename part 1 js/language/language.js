//Utilisez un switch pour log la string suivante selon le
//« language »
//- chinese : « MOST number of native speakers! »
//- spanish : « 2nd place in number of native speakers »
//- english : « 3rd place »
//- hindi : « Number 4 »
//- arabic : « 5th most spoken language »
//- Pour les autres log simplement « Great language too :D »

language = prompt("Write your language: ");

switch (language) {
  case "chinese":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
