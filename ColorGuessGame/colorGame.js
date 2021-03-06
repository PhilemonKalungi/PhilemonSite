var numSquares = 6;
var color = generateRandomColor(numSquares);

var squares = document.querySelectorAll(".squares");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	color = generateRandomColor(numSquares);
	pickedColor = pickColor();
	messageDisplay.textContent = "";
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(color[i]){
			squares[i].style.backgroundColor = color[i];
		} else {
			squares[i].style.display = "none";
		}
	}

});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	color = generateRandomColor(numSquares);
	pickedColor = pickColor();
	messageDisplay.textContent = "";
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = color[i];
			squares[i].style.display = "block";
		}
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	color = generateRandomColor(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors"

	messageDisplay.textContent = "";
	//change color of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color[i];
	}
	h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors to square
	squares[i].style.backgroundColor = color[i]

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "CORRECT";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	});
}

function changeColors(colors) {
	//Loop through all the squares
	for(var i = 0; i < squares.length; i++){
		//Change each square to matchgiven color
		squares[i].style.backgroundColor = colors;
	}	
}

function pickColor() {
	var random = Math.floor(Math.random() * color.length)
	return color[random];
}

function generateRandomColor(num){
	//Make the array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		// random color and push into array(arr)
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}












