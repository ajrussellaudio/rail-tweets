const { random, choose } = require("../utils");

module.exports = () =>
  choose([`delayed by approximately ${random(20, 4)} minutes`, "cancelled"]);
