var argument = process.argv[2];

if (argument === "help") {
  require('./help');
}
if (argument === "bac") {
  require('./bac');
}
