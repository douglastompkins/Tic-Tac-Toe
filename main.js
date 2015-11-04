console.log('main.js is linked!');
var square = document.querySelector('.square');
var imgOne = document.getElementById('img1');
var imgTwo = document.getElementById('img2');
var imgThree = document.getElementById('img3');
var imgFour = document.getElementById('img4');
var imgFive = document.getElementById('img5');
var imgSix = document.getElementById('img6');
var imgSeven = document.getElementById('img7');
var imgEight = document.getElementById('img8');
var imgNine = document.getElementById('img9');

i=0

var clickSquare = function(event){
	if (event.target.classList.contains('square')){
	if (i%2===0){
	selector = 'x';
	i++;
	console.log(i)
	} else if (i%2!==0) {
	selector = 'o';
	i++;
	console.log(i)
}
	var target=event.target;
	console.log(event.target);
	event.target.classList.add(selector)
	event.target.removeEventListener('click',clickSquare)
	}
}
var resetButton = document.getElementById('reset')
var clearBoard = function(){
	location.reload();
}

resetButton.addEventListener('click', clearBoard)

imgOne.addEventListener('click', clickSquare);
imgTwo.addEventListener('click', clickSquare);
imgThree.addEventListener('click', clickSquare);
imgFour.addEventListener('click', clickSquare);
imgFive.addEventListener('click', clickSquare);
imgSix.addEventListener('click', clickSquare);
imgSeven.addEventListener('click', clickSquare);
imgEight.addEventListener('click', clickSquare);
imgNine.addEventListener('click', clickSquare);