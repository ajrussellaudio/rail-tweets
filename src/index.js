const time = require("./partials/time");
const station = require("./partials/station");
const effect = require("./partials/effect");
const cause = require("./partials/cause");
const fix = require("./partials/fix");
const ending = require("./partials/ending");
const { choose } = require("./utils");

const info = [
  `UPDATE: The ${time(
    45
  )} service from ${station()} to ${station()} has been ${effect()} due to ${cause()}.`,

  `We regret to inform passengers that the ${time(
    45
  )} service from ${station()} to ${station()} has been ${effect()} due to ${cause()}.`,

  `UPDATE: The line between ${station()} and ${station()} has now been ${fix()} following ${cause()}.`,

  `Passengers at ${station()} awaiting the arrival of the ${time(
    10
  )} service to ${station()}, please be advised that this service is now ${effect()} due to ${cause()}.`
];

const tweet = [choose(info), ending()].join(" ");

console.log(tweet);
console.log({ length: tweet.length });
