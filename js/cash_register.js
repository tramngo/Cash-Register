const calc = calculator();
var clickOperation='null';
var storedNumber = 0;
var display = document.getElementById('display');


var nine = document.getElementById('nine');
nine.addEventListener('click',function() {
display.innerHTML += '9';
});

var eight = document.getElementById('eight');
eight.addEventListener('click',function() {
display.innerHTML += '8';
});

var seven = document.getElementById('seven');
seven.addEventListener('click',function() {
display.innerHTML += '7';
});

var six = document.getElementById('six');
six.addEventListener('click', function() {
display.innerHTML += '6';
});

var five = document.getElementById('five');
five.addEventListener('click', function() {
display.innerHTML += '5';
});

var four = document.getElementById('four');
four.addEventListener('click', function() {
display.innerHTML += '4';
});

var three = document.getElementById('three');
three.addEventListener('click', function() {
display.innerHTML += '3';
});

var two = document.getElementById('two');
two.addEventListener('click', function() {
display.innerHTML += '2';
});

var one = document.getElementById('one');
one.addEventListener('click', function() {
display.innerHTML += '1';
});

var zero = document.getElementById('zero');
zero.addEventListener('click', function() {
display.innerHTML += '0';
});

var doublez = document.getElementById('doublez');
doublez.addEventListener('click', function() {
display.innerHTML += '00';
});

var dot = document.getElementById('dot');
dot.addEventListener('click', function() {
display.innerHTML += '.';
});

var add = document.getElementById('add');
add.addEventListener('click', function() {
	storedNumber=parseFloat(display.innerHTML='+');
	calc.load(storedNumber);
	display.innerHTML = '';
	clickOperation='add';
});

var subtract = document.getElementById('subtract');
subtract.addEventListener('click', function() {
	storedNumber=parseFloat(display.innerHTML='-');
	calc.load(storedNumber);
	display.innerHTML = '';
	clickOperation='subtract';
});

var multiply = document.getElementById('multiply');
multiply.addEventListener('click', function() {
	storedNumber=parseFloat(display.innerHTML='×');
	calc.load(storedNumber);
	display.innerHTML = '';
	clickOperation='multiply';
});

var divide = document.getElementById('divide');
divide.addEventListener('click', function() {
	storedNumber=parseFloat(display.innerHTML='÷');
	calc.load(storedNumber);
	display.innerHTML = '';
	clickOperation='divide';
});

var clear = document.getElementById('clear');
clear.addEventListener('click', function() {
	calc.clearMemory=parseFloat(display.innerHTML='');
});


var equalSign = document.getElementById('equalSign');
equalSign.addEventListener('click', function(){
  if(clickOperation === 'add') {
  storedNumber = parseFloat(display.innerHTML);
  display.innerHTML = calc.getTotal();
}if(clickOperation === 'subtract') {
  storedNumber = parseFloat(display.innerHTML);
  display.innerHTML = calc.getTotal();
}if(clickOperation === 'multiply') {
  storedNumber = parseFloat(display.innerHTML);
  display.innerHTML = calc.getTotal();
}if(clickOperation === 'divide') {
  storedNumber = parseFloat(display.innerHTML);
  display.innerHTML = calc.getTotal();
});

