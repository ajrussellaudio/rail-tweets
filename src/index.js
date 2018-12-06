const time = require("./partials/time");
const station = require("./partials/station");
const effect = require("./partials/effect");
const cause = require("./partials/cause");
const { choose } = require("./utils");

const tweets = [
  `The ${time(
    45
  )} service from ${station()} to ${station()} has been ${effect()} due to ${cause()}.`,

  `We regret to inform passengers that the ${time(
    45
  )} service from ${station()} to ${station()} has been ${effect()} due to ${cause()}.`,

  `UPDATE: The line between ${station()} and ${station()} has now been...`,

  `Passengers at ${station()} awaiting the arrival of the ${time(
    10
  )} service to ${station()}, please be advised that this service is now ${effect()} due to ${cause()}.`
];

console.log(choose(tweets));
