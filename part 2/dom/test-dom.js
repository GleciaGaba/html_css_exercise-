const hello = document.querySelector(".box");
hello.style.fontSize = "30px";
hello.style.color = "green";

console.log(document.querySelector("#box"));
Text.textContent = "Hello World!!";

console.log(document.querySelectorAll(".box"));

const container = document.querySelector(".container");

container.insertAdjacentHTML("afterbegin", "<h1>Hello</h1>");
container.innerHTML += "<h1>Yo</h1>";

const button = document.querySelector(".button");
button.addEventListener("keydown", (event) => {
  event.preventDefault();
  console.log(event.key);
  if (event.key == " ") {
    let colors = ["blue", "red", "yellow", "orange", "pink"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    container.style.backgroundColor = randomColor;
  }
});

button.addEventListener("click", function () {
  hello.classList.toggle("hidden");
});
