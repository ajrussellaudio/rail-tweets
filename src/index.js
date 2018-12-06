const time = require("./partials/time");
const station = require("./partials/station");
const { choose } = require("./utils");

const tweets = [
  `We regret to inform passengers on the ${time()} service from ${station()} to ${station()} that...`,
  `We regret to inform passengers that the ${time()} service from ${station()} to ${station()} has been...`,
  `UPDATE: The line between ${station()} and ${station()} has now been...`
];

console.log(choose(tweets));
