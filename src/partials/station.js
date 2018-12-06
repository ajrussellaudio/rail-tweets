const stations = require("./stationsList");
const { choose } = require("../utils");

module.exports = () => choose(stations);
