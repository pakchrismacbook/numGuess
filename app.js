let
min = 1,
max = 10,
winningNum = 2,
guessesLeft = 3
;

// ui elements
const
game = document.getElementById('game'),
minNum = document.querySelector('.min-num'),
maxNum = document.querySelector('.max-num'),
guessBtn = document.getElementById('guess-btn'),
guessInput = document.getElementById('guess-input'),
message = document.querySelector('.message')
;

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function(){
	let guess = parseInt(guessInput.value);
	// console.log(guess)
	// validate
	if(isNaN(guess) || guess<min || guess>max){
		setMessage(`Please enter a number between ${min} and ${max}`, 'red');
	}
	if(guess===winningNum){
		// guessInput.disabled = true;
		// guessInput.style.borderColor = 'green';
		// setMessage(`${winningNum} is correct!`, 'green');
		gameOver(true, `${winningNum} is correct!`);
	} else{
		guessesLeft-=1;
		if(guessesLeft===0){
			// guessInput.disabled = true;
			// guessInput.style.borderColor = 'red';
			// setMessage(`Sorry, you have ${guessesLeft} guesses left. The correct number was ${winningNum}.`, 'red');
			gameOver(false, `Sorry, you have ${guessesLeft} guesses left. The correct number was ${winningNum}.`);
		} else{
			guessInput.style.borderColor = 'red';
			guessInput.value = '';
			setMessage(`Incorrect, ${guessesLeft} guesses left.`);
		}
	}
});
function setMessage(msg, color){
	message.style.color = color;
	message.textContent = msg;
}
function gameOver(won, msg){
	let color;
	won ? color='green' : color='red';
	guessInput.disabled = true;
	guessInput.style.borderColor = color;
	setMessage(msg, color);
}