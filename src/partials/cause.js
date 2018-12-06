const { choose } = require("../utils");

module.exports = () =>
  choose([
    "leaves on the line",
    "staff shortages",
    "industrial action",
    "inclement weather"
  ]);
