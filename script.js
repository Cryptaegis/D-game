/* Function to change the player name
function editNames() {
  first = prompt("Change Player1 name");
  second = prompt("Change player2 name");

  document.querySelector("p.first").innerHTML = player1;

  document.querySelector("p.second").innerHTML = player2;
}

// Function to roll the dice
function rollTheDice() {
  setTimeout(function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document
      .querySelector(".img1")
      .setAttribute("src", "dice" + randomNumber1 + ".png");

    document
      .querySelector(".img2")
      .setAttribute("src", "dice" + randomNumber2 + ".png");

    if (randomNumber1 === randomNumber2) {
      document.querySelector("h1").innerHTML = "Draw!";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = second + " WINS!";
    } else {
      document.querySelector("h1").innerHTML = first + " WINS!";
    }
  }, 2500);
}*/

let image = [
  "face-1.jpg",
  "face-2.jpg",
  "face-3.jpg",
  "face-4.jpg",
  "face-5.jpg",
  "face-6.jpg",
];
let die = document.querySelectorAll("image");
//function to create a new game on click*/
const newGame = document.getElementById("btn-new");
const hold = document.getElementById("btn-hold");
const pFirst = document.getElementById("first");
const pSecond = document.getElementById("second");
const rollTheDice = document.getElementById("btn-roll");
let pic = documentgetElementById("dice-pic");

rollDice = () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(image[randomNumber]);
};
rollTheDice.addEventListener("click", rollDice);
