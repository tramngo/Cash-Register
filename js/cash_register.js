var nine = document.getElementById('nine');
nine.addEventListener('click',function(){
  var textArea = document.getElementById('textArea');
textArea.innerHTML += '9'; 
});

var eight = document.getElementById('eight');
eight.addEventListener('click',function() {
	var textArea = document.getElementById('textArea');
textArea.innerHTML += '8';
});

var seven = document.getElementById('seven');
seven.addEventListener('click',function() {
	var textArea = document.getElementById('textArea');
textArea.innerHTML += '7';
});

var six = document.getElementById('six');
divide.addEventListener('click', function() {
	var textArea = document.getElementById('textArea');
textArea.innerHTML += '6';
});

var five = document.getElementById('five');
five.addEventListener('click', function() {
	var textArea = document.getElementById('textArea');
textArea.innerHTML += '5';
});

var four = document.getElementById('four');
four.addEventListener('click', function() {
	var textArea = document.getElementById('textArea');
textArea.innerHTML += '4';
});

var three = document.getElementById('three');
three.addEventListener('click', function() {
	var textArea = document.getElementById('textArea');
textArea.innerHTML += '3';
});

var two = document.getElementById('two');
two.addEventListener('click', function() {
	var textArea = document.getElementById('textArea');
textArea.innerHTML += '2';
});

var one = document.getElementById('one');
two.addEventListener('click', function() {
	var textArea = document.getElementById('textArea');
textArea.innerHTML += '1';
});

var zero = document.getElementById('zero');
zero.addEventListener('click', function() {
	var textArea = document.getElementById('textArea');
textArea.innerHTML += '0';
});

var doubleZero = document.getElementById('double zero');
zero.addEventListener('click', function() {
	var textArea = document.getElementById('textArea');
textArea.innerHTML += '00';
});

var dot = document.getElementById('dot');
zero.addEventListener('click', function() {
	var textArea = document.getElementById('textArea');
textArea.innerHTML += '.';
});

var divide = document.getElementById('divide');
divide.addEventListener('click', calculator.divide);
var textArea = document.getElementById('textArea');
textArea.innerHTML += '÷';
textArea.appendChild(divide);

var multiply = document.getElementById('multiply');
divide.addEventListener('click', calculator.multiply);
var textArea = document.getElementById('textArea');
textArea.innerHTML += '×';
textArea.appendChild(multiply);

var add = document.getElementById('add');
divide.addEventListener('click', calculator.add);
var textArea = document.getElementById('textArea');
textArea.innerHTML += '+';
textArea.appendChild(multiply);

var subtract = document.getElementById('subtract');
divide.addEventListener('click', calculator.subtract);
var textArea = document.getElementById('textArea');
textArea.innerHTML += '-';
textArea.appendChild(subtract);

