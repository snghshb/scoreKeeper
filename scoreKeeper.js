/*alert("connected")*/

var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Span = document.querySelector("#p1Span");
var p2Span = document.querySelector("#p2Span");
var resetButton = document.querySelector("#reset");
var score = document.querySelector("#winningScore");
var numInput = document.querySelector("input[type='number']");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function() {
	if(!gameOver) {
		p1Score++;
		if(p1Score === winningScore) {
			gameOver = true;
			p1Span.classList.add("winner");
		}
		p1Span.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function() {
	if(!gameOver) {
		p2Score++;
		if(p2Score === winningScore) {
			gameOver = true;
			p2Span.classList.add("winner");
		}
		p2Span.textContent = p2Score;
	}
});

function reset() {
	p1Score = 0;
	p1Span.textContent = p1Score;
	p1Span.classList.remove("winner");
	p2Score = 0;
	p2Span.textContent = p2Score;
	p2Span.classList.remove("winner");
	gameOver = false;
}

resetButton.addEventListener("click", function() {
	reset();
});

numInput.addEventListener("change", function() {
	//console.log(numInput.value);
	score.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});