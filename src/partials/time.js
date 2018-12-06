const moment = require("moment");
const { random } = require("../utils");

module.exports = () =>
  moment()
    .subtract(random(45), "minutes")
    .format("HH:mm");
