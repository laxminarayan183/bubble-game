alert("Bubble Game ");
var timer = 60;
var score = 0;
var hitrn;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i < 76; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();

function runTimer() {
  var timers = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timers);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over...!</h1>
      
      <h3>Your Score is ${score}</h3>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (btns) {
  var clickedNum = Number(btns.target.textContent);
  if (clickedNum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

runTimer();
getNewHit();
