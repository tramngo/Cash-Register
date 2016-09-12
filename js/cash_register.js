const calc = calculator();
var clickOperation='null';
var storedNumber = 0;
var display = document.getElementById('display');

//create and use function to update display
function updateDisplay(content){
   display.innerHTML = display.innerHTML + content;
}

//load display into calculator total 
function loadDisplayIntoCalc(){
	calc.load(parseFloat(display.innerHTML));
}

//load calculator total into display
function loadCalcIntoDisplay(){
	display.innerHTML = calc.getTotal();
}





//create and use function to clear display
function clearDisplay() {
   display.innerHTML = '';
}

//sums the value passed in with total
function addValue(num) {
	calc.add(num);
}




var nine = document.getElementById('nine');
nine.addEventListener('click',function() {
updateDisplay('9');
loadDisplayIntoCalc();
});

var eight = document.getElementById('eight');
eight.addEventListener('click',function() {
updateDisplay('8');
loadDisplayIntoCalc();
});

var seven = document.getElementById('seven');
seven.addEventListener('click',function() {
updateDisplay('7');
loadDisplayIntoCalc();
});

var six = document.getElementById('six');
six.addEventListener('click', function() {
updateDisplay('6');
loadDisplayIntoCalc();
});

var five = document.getElementById('five');
five.addEventListener('click', function() {
updateDisplay('5');
loadDisplayIntoCalc();
});

var four = document.getElementById('four');
four.addEventListener('click', function() {
updateDisplay('4');
loadDisplayIntoCalc();
});

var three = document.getElementById('three');
three.addEventListener('click', function() {
updateDisplay('3');
loadDisplayIntoCalc();
});

var two = document.getElementById('two');
two.addEventListener('click', function() {
updateDisplay('2');
loadDisplayIntoCalc();
});

var one = document.getElementById('one');
one.addEventListener('click', function() {
updateDisplay('1');
loadDisplayIntoCalc();
});

var zero = document.getElementById('zero');
zero.addEventListener('click', function() {
updateDisplay('0');
loadDisplayIntoCalc();
});

var doublez = document.getElementById('doublez');
doublez.addEventListener('click', function() {
updateDisplay('00');
loadDisplayIntoCalc();
});

var dot = document.getElementById('dot');
dot.addEventListener('click', function() {
updateDisplay('.');
loadDisplayIntoCalc();
});

var clear = document.getElementById('clear');
clear.addEventListener('click', function() {
	calc.clearMemory=parseFloat(display.innerHTML);
        display.innerHTML=clearDisplay();
});
