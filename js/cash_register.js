const calc = calculator();

var nine = document.getElementById('nine');
console.log(nine);
nine.addEventListener('click',function() {
var textArea = document.getElementById('textArea');
textArea.value += '9';
});

var eight = document.getElementById('eight');
console.log(eight);
eight.addEventListener('click',function() {
var textArea = document.getElementById('textArea');
textArea.value += '8';
});

var seven = document.getElementById('seven');
seven.addEventListener('click',function() {
var textArea = document.getElementById('textArea');
textArea.value += '7';
});

var six = document.getElementById('six');
console.log(six);
six.addEventListener('click', function() {
var textArea = document.getElementById('textArea');
textArea.value += '6';
});

var five = document.getElementById('five');
console.log(five);
five.addEventListener('click', function() {
var textArea = document.getElementById('textArea');
textArea.value += '5';
});

var four = document.getElementById('four');
four.addEventListener('click', function() {
var textArea = document.getElementById('textArea');
textArea.value += '4';
});

var three = document.getElementById('three');
three.addEventListener('click', function() {
var textArea = document.getElementById('textArea');
textArea.innerHTML += '3';
});

var two = document.getElementById('two');
console.log(two);
two.addEventListener('click', function() {
var textArea = document.getElementById('textArea');
textArea.value += '2';
});

var one = document.getElementById('one');
one.addEventListener('click', function() {
var textArea = document.getElementById('textArea');
textArea.value += '1';
});

var zero = document.getElementById('zero');
zero.addEventListener('click', function() {
var textArea = document.getElementById('textArea');
textArea.value += '0';
});

var doublez = document.getElementById('doublez');
doublez.addEventListener('click', function() {
var textArea = document.getElementById('textArea');
textArea.value += '00';
});

var dot = document.getElementById('dot');
dot.addEventListener('click', function() {
var textArea = document.getElementById('textArea');
textArea.value += '.';
});

var add = document.getElementById('add');
add.addEventListener('click', function() {
var textArea = document.getElementById('textArea');
calc.add(parseFloat(textArea.value));
textArea.value += '+';
});

var subtract = document.getElementById('subtract');
subtract.addEventListener('click', function() {
var textArea = document.getElementById('textArea');
calc.subtract(parseFloat(textArea.value));
textArea.value += '-';
});

var multiply = document.getElementById('multiply');
multiply.addEventListener('click', function() {
var textArea = document.getElementById('textArea');
calc.multiply(parseFloat(textArea.value));
textArea.value += '×';
});

var divide = document.getElementById('divide');
divide.addEventListener('click', function() {
var textArea = document.getElementById('textArea');
calc.divide(parseFloat(textArea.value));
textArea.value += '÷';
});

var equalSign = document.getElementById('equal sign');
divide.addEventListener('click', function() {
var textArea = document.getElementById('textArea');
textArea.value += '=';
});

var clear = document.getElementById('clear');
clear.addEventListener('click', function() {
var textArea = document.getElementById('textArea');
calc.clearMemory(parseFloat(textArea.value));
textArea.value='';
});

var getBalance = document.getElementById('get balance');
getBalance.addEventListener('click', function() {
var textArea = document.getElementById('textArea');
calc.recallMemory(parseFloat(textArea.value));
textArea.value='';
});