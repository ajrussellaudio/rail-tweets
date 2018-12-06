const random = max => Math.floor(Math.random() * max);

const choose = list => list[random(list.length)];

module.exports = {
  random,
  choose
};
