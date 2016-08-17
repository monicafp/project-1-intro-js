var argument = process.argv[2];
var help = require('./help');
var bac = require('./bac');
var clear = require('clear');
var prompt = require('prompt-sync')();

if (argument === "help") {
  console.log(help());
}

if (argument === "bac") {
  clear();

  var name = prompt("What is your name? ");
  var gender = Number(prompt("What is your gender? Enter \"0\" for male and \"1\" for female. "));
  var weight = Number(prompt('How many pounds do you weigh? '));
  var cansOfBeer = Number(prompt('How many Medallas have you consumed? '));
  var hoursSinceLastDrink = Number(prompt('How many hours have passed since your last Medalla? '));

  console.log(bac.canDrive(name, bac.calculate(cansOfBeer, weight, gender, hoursSinceLastDrink)));
}
