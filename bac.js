var colors = require('colors');

var bac = {
  calculate: function(cansOfBeer, weight, gender, hoursSinceLastDrink) {
    if (gender === 0) {
      gender = 0.73;
    }
    if (gender === 1) {
      gender = 0.66;
    }
    return (cansOfBeer * 10 * 5.14 / weight * gender) - 0.015 * hoursSinceLastDrink;
  },
  canDrive: function(name, bac) {
    if (bac < 0.08) {
      return name.green + ", your blood alcohol content is ".green + bac.toPrecision(2).green + "%\nYou are ok to drive. Be safe!".green;
    } else {
      return name.red + ", your blood alcohol content is ".red + bac.toPrecision(2).red + "%\nDo not drive!".red;
    }
  }
}

module.exports = bac;
