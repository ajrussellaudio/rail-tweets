const moment = require("moment");
const { random } = require("../utils");

module.exports = minutesAgo =>
  moment()
    .subtract(random(minutesAgo), "minutes")
    .format("HH:mm");
