const calc = calculator();
var clickOperation='null';
var storedNumber = 0;
var display = document.getElementById('display');

//create and use function to update display
function updateDisplay(content){
   var display = document.getElementById('display');
   display.innerHTML = display.innerHTML + content;
}

//create and use function to clear display
function clearDisplay() {
   display.innerHTML = '';
}

var nine = document.getElementById('nine');
nine.addEventListener('click',function() {
updateDisplay('9');
});

var eight = document.getElementById('eight');
eight.addEventListener('click',function() {
updateDisplay('8');


var seven = document.getElementById('seven');
seven.addEventListener('click',function() {
updateDisplay('7');
});

var six = document.getElementById('six');
six.addEventListener('click', function() {
updateDisplay('6');
});

var five = document.getElementById('five');
five.addEventListener('click', function() {
updateDisplay('5');
});

var four = document.getElementById('four');
four.addEventListener('click', function() {
updateDisplay('4');
});

var three = document.getElementById('three');
three.addEventListener('click', function() {
updateDisplay('3');
});

var two = document.getElementById('two');
two.addEventListener('click', function() {
updateDisplay('2');
});

var one = document.getElementById('one');
one.addEventListener('click', function() {
updateDisplay('1');
});

var zero = document.getElementById('zero');
zero.addEventListener('click', function() {
updateDisplay('0');
});

var doublez = document.getElementById('doublez');
doublez.addEventListener('click', function() {
updateDisplay('00');
});

var dot = document.getElementById('dot');
dot.addEventListener('click', function() {
updateDisplay(.);
});

var clear = document.getElementById('clear');
clear.addEventListener('click', function() {
	calc.clearMemory=parseFloat(display.innerHTML);
        display.innerHTML=clearDisplay();
});
