var isX = true, arr = [], isFinished = false;
var msg = document.getElementById("game-over-message"), turnMessage = document.getElementById("turn-message");

function resetGame() {
	window.location = window.location;
}

function showTurn() {
	if (!isFinished) {
	  if (!isX) {
		turnMessage.textContent = "X's Turn";
	  	turnMessage.style.color = "green";
	  } else {
		turnMessage.textContent = "O's Turn";
	  	turnMessage.style.color = "red";
	  }
	}
}

function checkBoard() {
	if (arr[1] == arr[2] && arr[2] == arr[3] && arr[1] != null && arr[2] != null && arr[3] != null) {
	  isFinished = true;
	  if (arr[1] == 1) {
		msg.textContent = "X won the Game!";
  		msg.style.color = "green";
	  } else {
	    msg.textContent = "O won the Game!";
  		msg.style.color = "red";
	  }
	  return;
	}

	if (arr[4] == arr[5] && arr[5] == arr[6] && arr[4] != null && arr[5] != null && arr[6] != null) {
	  isFinished = true;
	  if (arr[4] == 1) {
		msg.textContent = "X won the Game!";
  		msg.style.color = "green";
	  } else {
	    msg.textContent = "O won the Game!";
  		msg.style.color = "red";
	  }
	  return;
	}

	if (arr[7] == arr[8] && arr[8] == arr[9] && arr[7] != null && arr[8] != null && arr[9] != null) {
	  isFinished = true;
	  if (arr[7] == 1) {
		msg.textContent = "X won the Game!";
  		msg.style.color = "green";
	  } else {
	    msg.textContent = "O won the Game!";
  		msg.style.color = "red";
	  }
	  return;
	}

	if (arr[1] == arr[4] && arr[4] == arr[7] && arr[1] != null && arr[4] != null && arr[7] !=null) {
	  isFinished = true;
	  if (arr[1] == 1) {
		msg.textContent = "X won the Game!";
  		msg.style.color = "green";
	  } else {
	    msg.textContent = "O won the Game!";
  		msg.style.color = "red";
	  }
	  return;
	}

	if (arr[2] == arr[5] && arr[5] == arr[6] && arr[2] != null && arr[5] != null && arr[6] != null) {
	  isFinished = true;
	  if (arr[2] == 1) {
		msg.textContent = "X won the Game!";
  		msg.style.color = "green";
	  } else {
	    msg.textContent = "O won the Game!";
  		msg.style.color = "red";
	  }
	  return;
	}

	if (arr[3] == arr[6] && arr[6] == arr[9] && arr[3] != null && arr[6] != null && arr[9] != null) {
	  isFinished = true;
	  if (arr[3] == 1) {
		msg.textContent = "X won the Game!";
  		msg.style.color = "green";
	  } else {
	    msg.textContent = "O won the Game!";
  		msg.style.color = "red";
	  }
	  return;
	}

	if (arr[1] == arr[5] && arr[5] == arr[9] && arr[1] != null && arr[5] != null && arr[9] != null) {
	  isFinished = true;
	  if (arr[1] == 1) {
		msg.textContent = "X won the Game!";
  		msg.style.color = "green";
	  } else {
	    msg.textContent = "O won the Game!";
  		msg.style.color = "red";
	  }
	  return;
	}

	if (arr[3] == arr[5] && arr[5] == arr[7] && arr[3] != null && arr[5] != null && arr[7] != null) {
	  isFinished = true;
	  if (arr[3] == 1) {
		msg.textContent = "X won the Game!";
  		msg.style.color = "green";
	  } else {
	    msg.textContent = "O won the Game!";
  		msg.style.color = "red";
	  }
	  return;
	}
	if (arr[1] != null && arr[2] != null && arr[3] != null && arr[4] != null && arr[5] != null && arr[6] != null && arr[7] != null && arr[8] != null && arr[9] != null) {
		isFinished = true;
		msg.textContent = "Draw Game!";
  		msg.style.color = "blue";
	}
}

function firstCell() {
	showTurn();
	var div = document.getElementById("one");
	if (div.innerHTML == "" && !isFinished) {
	  if (isX) {
	  	div.innerHTML += "X";
	  	div.style.color = "green";
	  	isX = false;
	  	arr[1] = 1;
	  } else {
	  	div.innerHTML += "O";
	  	div.style.color = "red";
	  	isX = true;
	  	arr[1] = 0;
	  }
	}
	checkBoard();
}

function secondCell() {
	showTurn();
	var div = document.getElementById("two");
	if (div.innerHTML == "" && !isFinished) {
	  if (isX) {
	  	div.innerHTML += "X";
	  	div.style.color = "green";
	  	isX = false;
	  	arr[2] = 1;
	  } else {
	  	div.innerHTML += "O";
	  	div.style.color = "red";
	  	isX = true;
	  	arr[2] = 0;
	  }
	}
	checkBoard();
}

function thirdCell() {
	showTurn();
	var div = document.getElementById("three");
	if (div.innerHTML == "" && !isFinished) {
	  if (isX) {
	  	div.innerHTML += "X";
	  	div.style.color = "green";
	  	isX = false;
	  	arr[3] = 1;
	  } else {
	  	div.innerHTML += "O";
	  	div.style.color = "red";
	  	isX = true;
	  	arr[3] = 0;
	  }
	}
	checkBoard();
}

function fourthCell() {
	showTurn();
	var div = document.getElementById("four");
	if (div.innerHTML == "" && !isFinished) {
	  if (isX) {
	  	div.innerHTML += "X";
	  	div.style.color = "green";
	  	isX = false;
	  	arr[4] = 1;
	  } else {
	  	div.innerHTML += "O";
	  	div.style.color = "red";
	  	isX = true;
	  	arr[4] = 0;
	  }
	}
	checkBoard();
}

function fifthCell() {
	showTurn();
	var div = document.getElementById("five");
	if (div.innerHTML == "" && !isFinished) {
	  if (isX) {
	  	div.innerHTML += "X";
	  	div.style.color = "green";
	  	isX = false;
	  	arr[5] = 1;
	  } else {
	  	div.innerHTML += "O";
	  	div.style.color = "red";
	  	isX = true;
	  	arr[5] = 0;
	  }
	}
	checkBoard();
}

function sixthCell() {
	showTurn();
	var div = document.getElementById("six");
	if (div.innerHTML == "" && !isFinished) {
	  if (isX) {
	  	div.innerHTML += "X";
	  	div.style.color = "green";
	  	isX = false;
	  	arr[6] = 1;
	  } else {
	  	div.innerHTML += "O";
	  	div.style.color = "red";
	  	isX = true;
	  	arr[6] = 0;
	  }
	}
	checkBoard();
}

function seventhCell() {
	showTurn();
	var div = document.getElementById("seven");
	if (div.innerHTML == "" && !isFinished) {
	  if (isX) {
	  	div.innerHTML += "X";
	  	div.style.color = "green";
	  	isX = false;
	  	arr[7] = 1;
	  } else {
	  	div.innerHTML += "O";
	  	div.style.color = "red";
	  	isX = true;
	  	arr[7] = 0;
	  }
	}
	checkBoard();
}

function eighthCell() {
	showTurn();
	var div = document.getElementById("eight");
	if (div.innerHTML == "" && !isFinished) {
	  if (isX) {
	  	div.innerHTML += "X";
	  	div.style.color = "green";
	  	isX = false;
	  	arr[8] = 1;
	  } else {
	  	div.innerHTML += "O";
	  	div.style.color = "red";
	  	isX = true;
	  	arr[8] = 0;
	  }
	}
	checkBoard();
}

function ninethCell() {
	showTurn();
	var div = document.getElementById("nine");
	if (div.innerHTML == "" && !isFinished) {
	  if (isX) {
	  	div.innerHTML += "X";
	  	div.style.color = "green";
	  	isX = false;
	  	arr[9] = 1;
	  } else {
	  	div.innerHTML += "O";
	  	div.style.color = "red";
	  	isX = true;
	  	arr[9] = 0;
	  }
	}
	checkBoard();
}