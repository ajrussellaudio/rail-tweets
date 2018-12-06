const random = (max, offset = 0) => Math.floor(Math.random() * max + offset);

const choose = list => list[random(list.length)];

module.exports = {
  random,
  choose
};
