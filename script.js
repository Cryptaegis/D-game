const img = document.getElementById("dice-pic");
const rollTheDice = document.getElementById("btn-roll");
const first = document.getElementById("activePlayer");
const second = document.getElementById("secondPlayer");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
let currentscore = document.getElementsByClassName("current-score");
let activePlayer = [0, 0];
let playing = true;
let image = [
  "face-1.jpg",
  "face-2.jpg",
  "face-3.jpg",
  "face-4.jpg",
  "face-5.jpg",
  "face-6.jpg",
];

rollTheDice.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  img.src = `images/face-${[randomNumber]}.jpg`;

  if (playing) {
	    currentscore += randomNumber;
	    document.getElementById(`score${activePlayer}`).innerHTML = randomNumber;
	  }else{
	  changePlayer();
};

let changePlayer = () => {
  currentscore = 0;
  document.getElementById(`current-${activePlayer}`).textContent = currentscore;
  activePlayer = activePlayer == 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}
