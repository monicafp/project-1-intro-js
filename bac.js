var prompt = require('prompt-sync')();
var colors = require('colors');
var clear = require('clear');

clear();

var name = prompt("What is your name?");
var gender = prompt("What is your gender? Enter \"0\" for male and \"1\" for female.");
var weight = Number(prompt('How many pounds do you weigh?'));
var cansOfBeer = Number(prompt('How many Medallas have you consumed?'));
var hoursSinceLastDrink = Number(prompt('How many hours have passed since your last Medalla?'));

if (gender === 0) {
  gender = 0.73
} else {
  gender = 0.66;
}

function bac() {
  var BAC = Number((cansOfBeer * 10 * 5.14 / weight * gender) - (.015 * hoursSinceLastDrink)).toPrecision(2);
  if (BAC < 0.08) {
    console.log(name.green, ", your blood alcohol content is".green, BAC.green, ".\nYou are ok to drive. Be safe!").green;
  } else {
    console.log(name.red, " your blood alcohol content is".red, BAC.red, ".\nDo not drive!".red);
  }
}

console.log(bac());