const calc = calculator();
var operation = 'null';
var storedNumber = 0;
var display = document.getElementById('display');



var nine = document.getElementById('nine');
nine.addEventListener('click',function() {
display.innerHTML += '9';
});

var eight = document.getElementById('eight');
console.log(eight);
eight.addEventListener('click',function() {
display.innerHTML += '8';
});

var seven = document.getElementById('seven');
seven.addEventListener('click',function() {
display.innerHTML += '7';
});

var six = document.getElementById('six');
console.log(six);
six.addEventListener('click', function() {
display.innerHTML += '6';
});

var five = document.getElementById('five');
console.log(five);
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
console.log(two);
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
display.innerHTML += '+';
});

var subtract = document.getElementById('subtract');
subtract.addEventListener('click', function() {
calc.subtract(parseFloat(textArea.value));
display.innerHTML += '-';
});

var multiply = document.getElementById('multiply');
multiply.addEventListener('click', function() {
calc.multiply(parseFloat(textArea.value));
display.innerHTMl += '×';
});

var divide = document.getElementById('divide');
divide.addEventListener('click', function() {
calc.divide(parseFloat(textArea.value));
display.innerHTML += '÷';
});

var clear = document.getElementById('clear');
clear.addEventListener('click', function() {
calc.clearMemory(parseFloat(textArea.value));
display.innerHTML='';
});


var equalSign = document.getElementById('equalSign');
equalSign.addEventListener('click', function(){
  storedNumber = parseFloat(display.innerHTML);
  switch (operation){
    case 'add':
      myCalculator.add(storedNumber);
      break;
    case 'subtract':
      myCalculator.subtract(storedNumber);
      break;
    case 'multiply':
      myCalculator.multiply(storedNumber);
      break;
    case 'divide':
      myCalculator.divide(storedNumber);
      break;
  }
  display.innerHTML = myCalculator.getTotal();

});


