const tracery = require("tracery-grammar");
const moment = require("moment");

const random = max => Math.floor(Math.random() * max);

const time = () =>
  moment()
    .subtract(random(45), "minutes")
    .format("HH:mm");

const grammar = tracery.createGrammar({
  tweet: [
    `We regret to inform passengers on the ${time()} service from #station.capitalize# to #station.capitalize# that...`,
    `We regret to inform passengers that the ${time()} service from #station.capitalize# to #station.capitalize# has been...`,
    `UPDATE: The line between #station# and #station# has now been...`
  ],
  station: ["Glasgow", "Edinburgh", "Dundee", "Aberdeen", "Inverness"]
});

grammar.addModifiers(tracery.baseEngModifiers);

console.log(grammar.flatten("#tweet#"));
