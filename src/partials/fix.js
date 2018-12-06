const { choose } = require("../utils");

module.exports = () => choose(["cleared", "reopened", "repaired", "rebuilt"]);
