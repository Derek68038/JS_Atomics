var num1 = prompt("Give me a number: ");
var num2 = prompt("Give me a second number: ");
var num3 = prompt("Give me a third number: ");

var sum = parseInt(num1, 10) + parseInt(num2, 10) + parseInt(num3, 10);
var diff = parseInt(num1, 10) - parseInt(num2, 10) - parseInt(num3, 10);
var product = parseInt(num1, 10) * parseInt(num2, 10) * parseInt(num3, 10);
var div = parseInt(num1, 10) / parseInt(num2, 10);
var mod = parseInt(num1, 10) % parseInt(num2, 10);
var inc = parseInt(num1, 10);
var increment = inc++
var dec = parseInt(num2, 10);
var decrease = dec--


alert(num1 + " + " + num2 + " + " + num3 + " = " + sum);
alert(num1 + " - " + num2 + " - " + num3 + " = " + diff);
alert(num1 + " * " + num2 + " * " + num3 + " = " + product);
alert(num1 + " / " + num2 + " = " + div);
alert(num1 + " % " + num2 + " = " + mod);
alert(num1 + "++" + " = " + increment);
alert(num2 + "--" + " = " + decrease);
alert(num3 + " to the power of 2 = " + Math.pow(num3, 2));
