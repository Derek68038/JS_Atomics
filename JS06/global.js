var password = "ozzie";

var answer = prompt("Please enter your password:");

if (password === answer) {
  alert("Good job!")
} else {
  alert("Sorry the password was actually " + password)
};

////////////////////////////////////////////////////////////////

var number = 12345;

var user = prompt("Give me a number:")

if (number === user) {
  alert("Good job!")
} else {
  alert("Sorry the number was actually " + number)
};

////////////////////////////////////////////////////////////////

var age = prompt("What's your age?");

if (age > 24) {
  alert("You can rent a car")
  alert("Please don't drink and drive")
  alert("You're eligible for a driver's license")
};

if (age > 20 && age < 25) {
  alert("Please don't drink and drive")
  alert("You're eligible for a driver's license")
};

if (age > 15 && age < 21) {
  alert("You're eligible for a driver's license")
};

if (age >= 0 && age < 16) {
  alert("You can't drive yet, but you'll be able to in a few years")
};

if (age < 0) {
  alert("You haven't been born yet")
};

if (isNaN(age) === true) {
  alert("Sorry, but that's not a number")
};

///////////////////////////////////////////////////////////////

var age2 = prompt("What's your age?");

if (age2 > 24) {
    alert("You can rent a car")
} else if (age2 > 20 && age2 < 25) {
    alert("Please don't drink and drive")
} else if (age2 > 15 && age2 < 21) {
    alert("You're eligible for a driver's license")
} else if (age2 >= 0 && age2 < 16) {
    alert("You can't drive yet, but you'll be able to in a few years")
} else if (age2 < 0) {
    alert("You haven't been born yet")
} else {
    alert("Sorry, but that's not a number")
};

/////////////////////////////////////////////////////////////

var side1 = prompt("What's the length of the first side of the triangle?")
var side2 = prompt("What's the length of the second side of the triangle?")
var side3 = prompt("What's the length of the third side of the triangle?")

if (parseInt(side1) + parseInt(side2) > parseInt(side3) && parseInt(side1) + parseInt(side3) > parseInt(side2) && parseInt(side2) + parseInt(side3) > parseInt(side1)) {
  alert("This is a valid triangle")
} else {
  alert("This is not a valid triangle")
};



















