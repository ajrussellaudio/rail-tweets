const { choose } = require("../utils");

module.exports = () =>
  choose([
    "We apologise for any inconvenience this may cause.",
    "For further assistance, please speak to station staff.",
    "Report anything suspicious to staff."
  ]);
